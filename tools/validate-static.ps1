param(
    [string]$ArchiveRoot = (Split-Path -Parent $PSScriptRoot)
)

$ErrorActionPreference = 'Stop'
$versionsRoot = Join-Path $ArchiveRoot 'versions'

if (-not (Test-Path -LiteralPath $versionsRoot -PathType Container)) {
    throw "Versions directory not found: $versionsRoot"
}

$results = foreach ($versionDirectory in Get-ChildItem -LiteralPath $versionsRoot -Directory | Sort-Object Name) {
    $entryPoint = Join-Path $versionDirectory.FullName 'index.html'
    $missingReferences = [System.Collections.Generic.List[string]]::new()
    $emptyReferences = [System.Collections.Generic.List[string]]::new()
    $absoluteReferences = [System.Collections.Generic.List[string]]::new()

    if (Test-Path -LiteralPath $entryPoint -PathType Leaf) {
        $html = Get-Content -LiteralPath $entryPoint -Raw
        $matches = [regex]::Matches($html, '(?i)(?:src|href)\s*=\s*["'']([^"''#]+)["'']')

        foreach ($match in $matches) {
            $reference = $match.Groups[1].Value
            if ($reference -match '^(?:https?:|data:|mailto:|javascript:|//)') {
                continue
            }

            if ($reference.StartsWith('/')) {
                $absoluteReferences.Add($reference)
                continue
            }

            $cleanReference = ($reference -split '[?#]', 2)[0]
            if ([string]::IsNullOrWhiteSpace($cleanReference)) {
                continue
            }

            $resolved = Join-Path $versionDirectory.FullName ([System.Uri]::UnescapeDataString($cleanReference).Replace('/', '\'))
            if (-not (Test-Path -LiteralPath $resolved -PathType Leaf)) {
                $missingReferences.Add($reference)
            }
            elseif ((Get-Item -LiteralPath $resolved).Length -eq 0) {
                $emptyReferences.Add($reference)
            }
        }
    }

    $allFiles = Get-ChildItem -LiteralPath $versionDirectory.FullName -Recurse -File
    [pscustomobject]@{
        Version = $versionDirectory.Name
        EntryPoint = if (Test-Path -LiteralPath $entryPoint -PathType Leaf) { 'index.html' } else { 'MISSING' }
        Files = $allFiles.Count
        JavaScript = ($allFiles | Where-Object Extension -eq '.js').Count
        Tracks = ($allFiles | Where-Object {
            $_.DirectoryName.StartsWith((Join-Path $versionDirectory.FullName 'tracks')) -and
            $_.Extension -in @('.track', '.json')
        }).Count
        Models = ($allFiles | Where-Object Extension -in @('.glb', '.gltf', '.obj', '.mtl')).Count
        Audio = ($allFiles | Where-Object Extension -in @('.flac', '.mp3', '.ogg', '.wav')).Count
        ZeroByteFiles = ($allFiles | Where-Object Length -eq 0).Count
        MissingEntryReferences = $missingReferences.Count
        EmptyEntryReferences = $emptyReferences.Count
        AbsoluteEntryReferences = $absoluteReferences.Count
        MissingDetails = $missingReferences -join '; '
        EmptyDetails = $emptyReferences -join '; '
        AbsoluteDetails = $absoluteReferences -join '; '
    }
}

$results

if ($results.EntryPoint -contains 'MISSING' -or
    ($results | Measure-Object -Property ZeroByteFiles -Sum).Sum -gt 0 -or
    ($results | Measure-Object -Property MissingEntryReferences -Sum).Sum -gt 0 -or
    ($results | Measure-Object -Property EmptyEntryReferences -Sum).Sum -gt 0) {
    exit 1
}
