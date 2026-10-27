# PolyTrack Archive

An unofficial historical archive of 14 preserved PolyTrack releases, from `0.1.1` through `0.6.3`.

PolyTrack was created by Kodub. This archive was assembled by [StaticQuasar931](https://sites.google.com/view/staticquasar931/gm3z). It does not claim to be an official Kodub archive.

## Included releases

`0.1.1`, `0.2.0`, `0.3.0`, `0.3.1`, `0.4.0`, `0.4.1`, `0.4.2`, `0.5.0`, `0.5.1`, `0.5.2`, `0.6.0`, `0.6.1`, `0.6.2`, `0.6.3`

Version `0.1.0` is intentionally not included.

## Featured community release

[PolyTrack 0.6.3 Ranked](https://sites.google.com/view/staticquasar931/gm3z/polytrack-ranked) is an unofficial community release by StaticQuasar931. It is promoted separately from the historical Kodub builds and opens in a new tab from the launcher. Launcher links label the traffic source as `PolyTrack Archive` using `utm_source`.

## Use locally

Serve the repository over HTTP, then open the root page. The included helper works with Node.js:

```powershell
node tools/serve-static.mjs 8124
```

Then open `http://127.0.0.1:8124/`. Do not run the historical builds directly with `file://` URLs.

## Static hosting

The root launcher and each game use relative URLs, so the archive is suitable for GitHub Pages and other ordinary static hosts. Click a version from the launcher to navigate in the same browser tab. This avoids encouraging the historical multi-instance warning in later releases.

`.nojekyll` is included for GitHub Pages so the archive is served as static files without Jekyll processing.

## Preservation records

- [Provenance](PROVENANCE.md) records the origin, filename, source hash, and confidence for every release.
- [Repair log](REPAIR-LOG.md) records the exact historical file restorations made in Task 2.
- [Archive inventory](ARCHIVE-INVENTORY.md) records technical checks and launch status.
- [Launcher image provenance](assets/release-images/README.md) records the matching preserved-build asset used for every release card.
- [Launcher brand assets](assets/brand/README.md) records the official Kodub artwork and in-build icon stored locally for the archive header, social preview, and favicon.

The local `sources/` directory contains the immutable raw preservation artifacts. It is intentionally excluded from Git by `/sources/` in `.gitignore`, so public repository copies contain the playable extracted releases and documentation rather than raw ZIP or ASAR artifacts.

## Publishing to GitHub Pages

1. Create an empty GitHub repository. Do not add a README, license, or `.gitignore` there.
2. In this folder, initialize Git only if it is not already initialized, then add and commit the archive files. The existing `.gitignore` keeps `sources/` local.
3. Add your GitHub repository as `origin`, then push your default branch, usually `main`.
4. On GitHub, open the repository’s **Settings**, then **Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose `main`, choose `/ (root)`, and save.
5. After GitHub provides the Pages URL, open it and launch several versions from the root page. Use your browser’s Back button to return to the archive between tests.

For a repository that does not yet have Git initialized, the standard commands are:

```powershell
git init
git add .
git commit -m "Create PolyTrack historical archive launcher"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

If this folder already has Git initialized, skip `git init` and use its existing branch and remote setup instead.
