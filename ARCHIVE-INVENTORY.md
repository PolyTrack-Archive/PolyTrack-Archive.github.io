# PolyTrack preservation archive inventory

## Task 2 current state

All 13 requested releases are present and have the same final static-hosting convention:

- Extracted location: `versions/<version>/`
- Entry point: `versions/<version>/index.html`
- Raw source location: `sources/<version>/`, immutable and ignored by Git

The detailed source URLs, original local paths, filenames, hashes, source classifications, authenticity notes, and caveats are in `PROVENANCE.md`. Every content repair and its original/repaired hash is in `REPAIR-LOG.md`.

## Task 3 launcher state

The root `index.html` is a static, launcher-only archive layer. It renders the 13 chronological version cards from the centralized `assets/archive.js` metadata list and links with relative `versions/<version>/` URLs. Launcher styling is in `assets/archive.css`. No file under `versions/` was changed for Task 3.

Archive attribution is integrated in the launcher footer, page metadata, structured data, central configuration, an about section, source comments, and `README.md`. PolyTrack is separately credited to Kodub. `.nojekyll` is present for GitHub Pages, and `/sources/` remains ignored.

Each release card uses a local image tied to that exact preserved version. The early cards use captures of their original main menus; later cards use original in-build assets. The complete source map is in `assets/release-images/README.md`.

| Version | Version evidence | Confidence | Apparent modification status | Boot | Live driving | Second track | Editor | Current problems | Task 3 action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.1 | Captured path and rendered menu | Very high | Appears unmodified after authentic capture restoration | Menu | Pass | Pass | Pass | None observed | Add launcher link only |
| 0.2.0 | Captured path and rendered menu | Very high | Appears unmodified after authentic capture restoration | Menu | Pass | Pass | Pass | None observed | Add launcher link only |
| 0.3.0 | Release tag, URL, rendered menu | Very high | Appears unmodified based on inspected evidence | Menu | Pass | Pass | Pass | Optional legacy endpoint | Add launcher link only |
| 0.3.1 | Captured path and official release evidence | Very high | Appears unmodified after authentic capture restoration | Menu | Pass | Pass | Pass | Optional legacy endpoint | Add launcher link only |
| 0.4.0 | Release tag, URL, rendered menu | Very high | Appears unmodified based on inspected evidence | Menu | Pass | Pass | Pass | Nonfatal profile-token warning with shared state | Add launcher link only |
| 0.4.1 | Release tag, URL, rendered menu | Very high | Appears unmodified based on inspected evidence | Menu | Pass | Pass | Pass | Optional legacy service can fail | Add launcher link only |
| 0.4.2 | Release tag, URL, rendered menu | Very high | Appears unmodified based on inspected evidence | Menu | Pass | Pass | Pass | Optional legacy service can fail | Add launcher link only |
| 0.5.0 | Release tag, URL, rendered menu | Very high | Appears unmodified based on inspected evidence | Menu | Pass | Pass | Pass | Optional legacy services | Add launcher link only |
| 0.5.1 | Release tag, URL, rendered menu | Very high | Appears unmodified based on inspected evidence | Menu | Pass | Pass | Pass | Kodub server unavailable, offline core works | Add launcher link only |
| 0.5.2 | Release tag, URL, rendered menu | Very high | Appears unmodified based on inspected evidence | Menu | Pass | Pass | Pass | Kodub server unavailable, offline core works | Add launcher link only |
| 0.6.0 | Release tag, URL, rendered menu | Very high | Appears unmodified based on inspected evidence | Menu | Pass | Pass | Pass | Kodub server unavailable, offline core works | Add launcher link only |
| 0.6.1 | Release tag, update screen, rendered menu | Very high | Appears unmodified based on inspected evidence | Expected update screen, Continue works | Pass | Pass | Pass | Online services unavailable | Preserve first-run flow; add launcher link |
| 0.6.2 | ZIP name, update screen, rendered menu | High | Appears unmodified based on supplied untouched source and inspection | Expected update screen, Continue works | Pass | Pass | Pass | Online services unavailable | Preserve first-run flow; add launcher link |

Static validation found zero missing direct entry-page references, zero zero-byte playable files, and zero absolute-root direct entry references. All 179 bundled audio files served with their exact byte lengths. Checkpoint displays initialized in `0.3.0` and later; earlier versions correctly lack them. Full end-to-end completion of every track was outside the representative test scope.

### Task 2 repair result

- `0.1.1`: Restored 13 zero-byte stylesheets from the exact official historical host, byte-identical to the PolyModLoader `0.1.1` ASAR.
- `0.2.0`: Restored 15 zero-byte stylesheets from the exact official historical host, byte-identical to the PolyModLoader `0.2.0` ASAR.
- `0.3.1`: Restored 23 zero-byte stylesheets and the zero-byte `lib/ammo.js` from the exact official historical host, byte-identical to the PolyModLoader `0.3.1` ASAR. Repaired Ammo SHA-256: `E1854AC71F451348C98E86649AA90CFFD36EED3BEE4B06B018C062EB7C4B8BE8`.
- All other versions: No content repair required.

## Preserved Task 1 baseline

The remainder of this file is the Task 1 baseline retained for historical context. Its nested `capture/`, `app/`, and `working/` paths describe the pre-Task-2 extraction layout and are superseded by the current root paths above.

## Scope and handling

This archive intentionally contains these 13 releases only: `0.1.1`, `0.2.0`, `0.3.0`, `0.3.1`, `0.4.0`, `0.4.1`, `0.4.2`, `0.5.0`, `0.5.1`, `0.5.2`, `0.6.0`, `0.6.1`, and `0.6.2`. Version `0.1.0` is deliberately excluded.

`sources/` holds immutable preservation artifacts. `versions/` holds separately extracted working copies. No source artifact or game file was edited, beautified, repaired, or otherwise changed during Task 1. The supplied custom directory `C:\Users\Static\Documents\GitHub\Polytrack 0.6.2` was not inspected or used.

The three Network Zipper captures remain in their captured host layout under `versions/<version>/capture/`; their actual game roots are the `app-polytrack.kodub.com/<version>/` directories. Community Electron artifacts were extracted to `versions/<version>/app/`. The supplied 0.6.2 ZIP remains rooted at `versions/0.6.2/working/Polytrack-0.6.2-main/`.

## Overview

| Version | Source classification | Artifact | Version confidence | Basic launch status | Task 2 focus |
|---|---|---|---|---|---|
| 0.1.1 | Official Kodub web capture, supplied | `www.kodub.com.zip` | Very high | Main menu appeared | Deeper gameplay test only |
| 0.2.0 | Official Kodub web capture, supplied | `www.kodub.com(1).zip` | Very high | Main menu appeared | Deeper gameplay test only |
| 0.3.0 | Community-preserved historical build, PolyModLoader archive | `app.asar` | Very high | Main menu appeared | Deeper gameplay test only |
| 0.3.1 | Official Kodub web capture, supplied | `www.kodub.com(2).zip` | Very high | Fails before menu | Investigate preserved zero-byte `lib/ammo.js`; do not replace it from another version |
| 0.4.0 | Community-preserved historical build, PolyModLoader archive | `app.asar` | Very high | Main menu appeared | Recheck profile-token warning in a clean test profile |
| 0.4.1 | Community-preserved historical build, PolyModLoader archive | `app.asar` | Very high | Main menu appeared | Deeper gameplay test only |
| 0.4.2 | Community-preserved historical build, PolyModLoader archive | `app.asar` | Very high | Main menu appeared | Deeper gameplay test only |
| 0.5.0 | Community-preserved historical build, PolyModLoader archive | `app.asar` | Very high | Main menu appeared | Deeper gameplay test only |
| 0.5.1 | Community-preserved historical build, PolyModLoader archive | `app.asar` | Very high | Main menu appeared with server connection error | Preserve and investigate API dependency later |
| 0.5.2 | Community-preserved historical build, PolyModLoader archive | `app.asar` | Very high | Main menu appeared with server connection error | Preserve and investigate API dependency later |
| 0.6.0 | Community-preserved historical build, PolyModLoader archive | `app.asar` | Very high | Main menu appeared with server connection error | Preserve and investigate API dependency later |
| 0.6.1 | Community-preserved historical build, PolyModLoader archive | `app.asar` | Very high | First-run update screen appeared with server connection error | Continue past update screen during deeper testing; investigate API dependency |
| 0.6.2 | Original/untouched supplied build | `Polytrack-0.6.2-main.zip` | High | First-run update screen appeared with server connection error | Continue past update screen during deeper testing; investigate API dependency |

## Audit method and limits

Each artifact was hashed with SHA-256 before extraction. ASARs were extracted with Electron's ASAR tooling into empty working directories. Basic static checks confirmed an identifiable `index.html`, JavaScript bundles, and expected asset directories. A local read-only HTTP server was used for basic browser checks only. No source files were written while testing.

The modification review was deliberately limited. Entry HTML and JavaScript were scanned for obvious third-party branding, ads, analytics, cheat, unblock, and proxy markers. No such markers were found. This supports “appears unmodified based on inspected evidence”; it does not prove mathematical authenticity. For PolyModLoader artifacts, preservation provenance is community-provided, not official.

The 0.5.1 through 0.6.2 browser checks logged failed server connections. This is recorded as an original runtime dependency issue, not repaired. Shared-browser “another instance” notices were avoided by using a single test tab for the definitive later-release check.

## Detailed records

### 0.1.1

- Release/source status: Present and extracted.
- Source type: Official Kodub web capture supplied by the archive owner.
- Source URL: Capture origin encoded in the ZIP layout: `https://app-polytrack.kodub.com/0.1.1/`.
- Original local filename: `www.kodub.com.zip`.
- Original source hash: `F7D11976C395EBD91415BBFB8687E5B0CEB4D8931FDD2147D5CBF604309837B9`.
- Preserved artifact: `sources/0.1.1/www.kodub.com.zip`.
- Extracted location: `versions/0.1.1/capture/`.
- Identified entry point: `capture/app-polytrack.kodub.com/0.1.1/index.html`.
- Version evidence: Captured game path contains `0.1.1`; the rendered menu says `kodub.com - VERSION 0.1.1`.
- Confidence: Very high.
- Apparent modification status: Appears original based on supplied official-source capture and inspected evidence; no obvious injected branding, ads, analytics, cheat, unblock, or proxy markers found.
- Basic launch status: Canvas and main menu with Customize, Editor, and Play appeared. No console errors observed in the basic check.
- Missing assets: None obvious in the basic check.
- Console/network problems: None observed.
- Notes: Full Network Zipper capture layout was retained.
- Recommended Task 2 action: Test track loading and gameplay without changing this source capture.

### 0.2.0

- Release/source status: Present and extracted.
- Source type: Official Kodub web capture supplied by the archive owner.
- Source URL: Capture origin encoded in the ZIP layout: `https://app-polytrack.kodub.com/0.2.0/`.
- Original local filename: `www.kodub.com(1).zip`.
- Original source hash: `DF3A2651F1F1D67C62C526FE752945D123BC448E9D9A8933E166077CDB96026C`.
- Preserved artifact: `sources/0.2.0/www.kodub.com(1).zip`.
- Extracted location: `versions/0.2.0/capture/`.
- Identified entry point: `capture/app-polytrack.kodub.com/0.2.0/index.html`.
- Version evidence: Captured game path contains `0.2.0`; rendered menu identifies `VERSION 0.2.0`.
- Confidence: Very high.
- Apparent modification status: Appears original based on supplied official-source capture and inspected evidence; no obvious alteration markers found.
- Basic launch status: Canvas and main menu appeared. No console errors observed in the basic check.
- Missing assets: None obvious in the basic check.
- Console/network problems: None observed.
- Notes: Full Network Zipper capture layout was retained.
- Recommended Task 2 action: Test track loading and gameplay without changing this source capture.

### 0.3.0

- Release/source status: Present and extracted.
- Source type: Community-preserved historical Electron build from the PolyModLoader preservation archive.
- Source URL: `https://git.polymodloader.com/polytrackmods/PolyTrack-Unofficial-Archive/releases/download/0.3.0/app.asar`.
- Original local filename: `app.asar`.
- Original source hash: `C5C683C998878EB45C3AF62DA757D68FA66254D1C88BB153F7D6230C619AA71A`.
- Preserved artifact: `sources/0.3.0/app.asar`.
- Extracted location: `versions/0.3.0/app/`.
- Identified entry point: `app/index.html`.
- Version evidence: PolyModLoader release tag/asset URL is `0.3.0`; rendered menu says `kodub.com - Version 0.3.0`.
- Confidence: Very high.
- Apparent modification status: Appears unmodified based on inspected evidence. This is community preservation provenance, not an official download.
- Basic launch status: Canvas and main menu appeared. No console errors observed in the basic check.
- Missing assets: None obvious in the basic check.
- Console/network problems: None observed.
- Notes: Extracted ASAR includes Electron wrapper files plus the web game root at the ASAR root.
- Recommended Task 2 action: Test track loading and gameplay.

### 0.3.1

- Release/source status: Present and extracted.
- Source type: Official Kodub web capture supplied by the archive owner.
- Source URL: Capture origin encoded in the ZIP layout: `https://app-polytrack.kodub.com/0.3.1/`.
- Original local filename: `www.kodub.com(2).zip`.
- Original source hash: `F3E37DBC809636597D7B5F76209CB98696F0B0A01EF41363455CC594A2B2569F`.
- Preserved artifact: `sources/0.3.1/www.kodub.com(2).zip`.
- Extracted location: `versions/0.3.1/capture/`.
- Identified entry point: `capture/app-polytrack.kodub.com/0.3.1/index.html`.
- Version evidence: Captured game path contains `0.3.1`.
- Confidence: Very high.
- Apparent modification status: Appears original based on supplied official-source capture and inspected evidence; no obvious alteration markers found.
- Basic launch status: Entry HTML loads a canvas but the menu does not appear.
- Missing assets: `capture/app-polytrack.kodub.com/0.3.1/lib/ammo.js` is present but zero bytes in the supplied capture.
- Console/network problems: Immediate `ReferenceError: Ammo is not defined` from `dist/main.bundle.js`.
- Notes: This failure is preserved exactly as captured. No replacement library was copied in.
- Recommended Task 2 action: Investigate a historically appropriate repair path, retain the source ZIP unchanged, and document any derived repaired copy separately.

### 0.4.0

- Release/source status: Present and extracted.
- Source type: Community-preserved historical Electron build from the PolyModLoader preservation archive.
- Source URL: `https://git.polymodloader.com/polytrackmods/PolyTrack-Unofficial-Archive/releases/download/0.4.0/app.asar`.
- Original local filename: `app.asar`.
- Original source hash: `5C240F015687B48434B1C06B02588F686EBEDD6F036E886B4D7C2771C1845FE0`.
- Preserved artifact: `sources/0.4.0/app.asar`.
- Extracted location: `versions/0.4.0/app/`.
- Identified entry point: `app/index.html`.
- Version evidence: PolyModLoader release tag/asset URL is `0.4.0`; rendered menu says `kodub.com - Version 0.4.0`.
- Confidence: Very high.
- Apparent modification status: Appears unmodified based on inspected evidence. Community preservation provenance, not official download.
- Basic launch status: Canvas and main menu appeared.
- Missing assets: None obvious in the basic check.
- Console/network problems: A `User profile token field has invalid type` message occurred once in the shared browser test profile; the menu still appeared.
- Notes: No correction applied.
- Recommended Task 2 action: Recheck the profile-token warning with an isolated clean profile, then test gameplay.

### 0.4.1

- Release/source status: Present and extracted.
- Source type: Community-preserved historical Electron build from the PolyModLoader preservation archive.
- Source URL: `https://git.polymodloader.com/polytrackmods/PolyTrack-Unofficial-Archive/releases/download/0.4.1/app.asar`.
- Original local filename: `app.asar`.
- Original source hash: `940B3C9B2D38BB7F97967887907D95EF714B099A791FA59F71CCCDFE76786320`.
- Preserved artifact: `sources/0.4.1/app.asar`.
- Extracted location: `versions/0.4.1/app/`.
- Identified entry point: `app/index.html`.
- Version evidence: PolyModLoader release tag/asset URL is `0.4.1`; rendered menu says `kodub.com - Version 0.4.1`.
- Confidence: Very high.
- Apparent modification status: Appears unmodified based on inspected evidence. Community preservation provenance, not official download.
- Basic launch status: Canvas and main menu appeared. No console errors observed in the basic check.
- Missing assets: None obvious in the basic check.
- Console/network problems: None observed.
- Notes: No repairs performed.
- Recommended Task 2 action: Test track loading and gameplay.

### 0.4.2

- Release/source status: Present and extracted.
- Source type: Community-preserved historical Electron build from the PolyModLoader preservation archive.
- Source URL: `https://git.polymodloader.com/polytrackmods/PolyTrack-Unofficial-Archive/releases/download/0.4.2/app.asar`.
- Original local filename: `app.asar`.
- Original source hash: `399F3C6BDCB325ABC91BDE37FE0087E4892188E1579561777E097960304B97C0`.
- Preserved artifact: `sources/0.4.2/app.asar`.
- Extracted location: `versions/0.4.2/app/`.
- Identified entry point: `app/index.html`.
- Version evidence: PolyModLoader release tag/asset URL is `0.4.2`; rendered menu says `kodub.com - Version 0.4.2`.
- Confidence: Very high.
- Apparent modification status: Appears unmodified based on inspected evidence. Community preservation provenance, not official download.
- Basic launch status: Canvas and main menu appeared. No console errors observed in the basic check.
- Missing assets: None obvious in the basic check.
- Console/network problems: None observed.
- Notes: No repairs performed.
- Recommended Task 2 action: Test track loading and gameplay.

### 0.5.0

- Release/source status: Present and extracted.
- Source type: Community-preserved historical Electron build from the PolyModLoader preservation archive.
- Source URL: `https://git.polymodloader.com/polytrackmods/PolyTrack-Unofficial-Archive/releases/download/0.5.0/app.asar`.
- Original local filename: `app.asar`.
- Original source hash: `AAF3DECA0DCCD53D3D3FD341BFFA0D4014C0D107B90858F1EB7F0B4EF76B7640`.
- Preserved artifact: `sources/0.5.0/app.asar`.
- Extracted location: `versions/0.5.0/app/`.
- Identified entry point: `app/index.html`.
- Version evidence: PolyModLoader release tag/asset URL is `0.5.0`; rendered menu says `kodub.com - Version 0.5.0`.
- Confidence: Very high.
- Apparent modification status: Appears unmodified based on inspected evidence. Community preservation provenance, not official download.
- Basic launch status: Canvas and main menu appeared. No console errors observed in the definitive single-tab check.
- Missing assets: None obvious in the basic check.
- Console/network problems: None observed in the definitive single-tab check.
- Notes: A shared-browser instance warning in a separate multi-tab check was test-environment state, not treated as a game failure.
- Recommended Task 2 action: Test track loading and gameplay.

### 0.5.1

- Release/source status: Present and extracted.
- Source type: Community-preserved historical Electron build from the PolyModLoader preservation archive.
- Source URL: `https://git.polymodloader.com/polytrackmods/PolyTrack-Unofficial-Archive/releases/download/0.5.1/app.asar`.
- Original local filename: `app.asar`.
- Original source hash: `213E736313C699FD1D13A062EE77CEFA019F204420CA6A755864B372F91F4A5E`.
- Preserved artifact: `sources/0.5.1/app.asar`.
- Extracted location: `versions/0.5.1/app/`.
- Identified entry point: `app/index.html`.
- Version evidence: PolyModLoader release tag/asset URL is `0.5.1`; rendered menu says `kodub.com - Version 0.5.1`.
- Confidence: Very high.
- Apparent modification status: Appears unmodified based on inspected evidence. Community preservation provenance, not official download.
- Basic launch status: Canvas and main menu appeared.
- Missing assets: None obvious in the basic check.
- Console/network problems: `Failed to connect to server, status: 0` from `main.bundle.js`; menu still appeared.
- Notes: No API workaround was applied.
- Recommended Task 2 action: Determine the intended historical server dependency and test offline/repair behavior without altering this source artifact.

### 0.5.2

- Release/source status: Present and extracted.
- Source type: Community-preserved historical Electron build from the PolyModLoader preservation archive.
- Source URL: `https://git.polymodloader.com/polytrackmods/PolyTrack-Unofficial-Archive/releases/download/0.5.2/app.asar`.
- Original local filename: `app.asar`.
- Original source hash: `2FEB88F40873A835935A5BBF2AA05882E886FAEB6CA53E51C0E0F103401822B2`.
- Preserved artifact: `sources/0.5.2/app.asar`.
- Extracted location: `versions/0.5.2/app/`.
- Identified entry point: `app/index.html`.
- Version evidence: PolyModLoader release tag/asset URL is `0.5.2`; rendered menu says `kodub.com - Version 0.5.2`.
- Confidence: Very high.
- Apparent modification status: Appears unmodified based on inspected evidence. Community preservation provenance, not official download.
- Basic launch status: Canvas and main menu appeared.
- Missing assets: None obvious in the basic check.
- Console/network problems: `Failed to connect to server` from `main.bundle.js`; menu still appeared.
- Notes: No API workaround was applied.
- Recommended Task 2 action: Determine the intended historical server dependency and test offline/repair behavior without altering this source artifact.

### 0.6.0

- Release/source status: Present and extracted.
- Source type: Community-preserved historical Electron build from the PolyModLoader preservation archive.
- Source URL: `https://git.polymodloader.com/polytrackmods/PolyTrack-Unofficial-Archive/releases/download/0.6.0/app.asar`.
- Original local filename: `app.asar`.
- Original source hash: `BA510766349E25A2C52614C328CD1054C06F83687B627741CC6448DB5CAF18C0`.
- Preserved artifact: `sources/0.6.0/app.asar`.
- Extracted location: `versions/0.6.0/app/`.
- Identified entry point: `app/index.html`.
- Version evidence: PolyModLoader release tag/asset URL is `0.6.0`; rendered menu says `© 2026 kodub.com - Version 0.6.0`.
- Confidence: Very high.
- Apparent modification status: Appears unmodified based on inspected evidence. Community preservation provenance, not official download.
- Basic launch status: Canvas and main menu appeared, including Garage, Editor, Settings, Multiplayer, and Play.
- Missing assets: None obvious in the basic check.
- Console/network problems: `Failed to connect to server` from `main.bundle.js`; menu still appeared.
- Notes: No API workaround was applied.
- Recommended Task 2 action: Determine the intended historical server dependency and test offline/repair behavior without altering this source artifact.

### 0.6.1

- Release/source status: Present and extracted.
- Source type: Community-preserved historical Electron build from the PolyModLoader preservation archive.
- Source URL: `https://git.polymodloader.com/polytrackmods/PolyTrack-Unofficial-Archive/releases/download/0.6.1/app.asar`.
- Original local filename: `app.asar`.
- Original source hash: `14FFE058983BF154B832C9DCFA982C5E44CE8BBB52840EF9302503BD8857C7C6`.
- Preserved artifact: `sources/0.6.1/app.asar`.
- Extracted location: `versions/0.6.1/app/`.
- Identified entry point: `app/index.html`.
- Version evidence: PolyModLoader release tag/asset URL is `0.6.1`; first-run screen says `Update 0.6.1` and describes the 0.6.1 multiplayer/community-track update.
- Confidence: Very high.
- Apparent modification status: Appears unmodified based on inspected evidence. Community preservation provenance, not official download.
- Basic launch status: Canvas and first-run update screen appeared. The check stopped before clicking Continue, so main-menu and gameplay checks remain for Task 2.
- Missing assets: None obvious in the basic check.
- Console/network problems: `Failed to connect to server` from `main.bundle.js`.
- Notes: No API workaround or update-popup modification was applied.
- Recommended Task 2 action: Continue through the update screen, test menu/gameplay, and investigate the server dependency in a derived repair workflow if necessary.

### 0.6.2

- Release/source status: Present and extracted.
- Source type: Original/untouched supplied build.
- Source URL: Not supplied. The preserved local artifact is the owner-provided untouched original source ZIP, not the separately existing modified custom directory.
- Original local filename: `Polytrack-0.6.2-main.zip`.
- Original source hash: `70EE585F7E124FCD4A7C4A3A9CB6731FE84FCFC4797A155554C943B84AE3C360`.
- Preserved artifact: `sources/0.6.2/Polytrack-0.6.2-main.zip`.
- Extracted location: `versions/0.6.2/working/Polytrack-0.6.2-main/`.
- Identified entry point: `working/Polytrack-0.6.2-main/index.html`.
- Version evidence: Supplied ZIP name identifies 0.6.2; first-run screen says `Update 0.6.2` and identifies the Natsu finish-line and editor-camera fixes.
- Confidence: High.
- Apparent modification status: Appears unmodified based on inspected evidence and its owner-supplied untouched-source designation. No use was made of `C:\Users\Static\Documents\GitHub\Polytrack 0.6.2`.
- Basic launch status: Canvas and first-run update screen appeared. The check stopped before clicking Continue, so main-menu and gameplay checks remain for Task 2.
- Missing assets: None obvious in the basic check.
- Console/network problems: `Failed to connect to server` from `main.bundle.js`.
- Notes: The supplied ZIP root directory is preserved in the working copy.
- Recommended Task 2 action: Continue through the update screen, test menu/gameplay, and investigate the server dependency in a derived repair workflow if necessary.

## Task 2 preparation

1. Preserve `sources/` as immutable and make any repairs only in clearly labeled derived working copies.
2. Address 0.3.1 first: its captured `lib/ammo.js` is zero bytes and prevents startup.
3. Validate 0.4.0 with a clean profile because of the isolated profile-token warning.
4. Investigate the failed server connections in 0.5.1, 0.5.2, 0.6.0, 0.6.1, and 0.6.2 without changing historical source artifacts.
5. Continue through 0.6.1 and 0.6.2 update screens, then test track selection and gameplay for every launchable version.
