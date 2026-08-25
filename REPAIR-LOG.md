# PolyTrack Task 2 repair and test log

## Preservation statement

`sources/` contains untouched source artifacts and supplemental recovery evidence. No file under `sources/` was edited, repackaged, recompressed, or overwritten. All restored files were written only to extracted copies under `versions/`.

The 13 web game roots were normalized to `versions/<version>/index.html` for static subdirectory hosting. This moved extracted files out of Network Zipper, Electron ASAR, or supplied ZIP container directories without changing their bytes. Wrapper and extraction-container files were not made part of the playable roots. This organizational change is recoverable from the immutable artifacts and is separate from the content repairs listed below.

## Summary

| Version | Boots | Gameplay | Editor | Network issues | Repairs | Ready |
| ------- | ----- | -------- | ------ | -------------- | ------- | ----- |
| 0.1.1 | Yes | Yes | Yes | None observed | 13 exact-version stylesheets restored | Yes |
| 0.2.0 | Yes | Yes | Yes | None observed | 15 exact-version stylesheets restored | Yes |
| 0.3.0 | Yes | Yes | Yes | Optional legacy endpoint present | No content repair | Yes |
| 0.3.1 | Yes | Yes | Yes | Optional legacy endpoint present | 23 stylesheets and `ammo.js` restored | Yes |
| 0.4.0 | Yes | Yes | Yes | Nonfatal profile-token warning | No content repair | Yes |
| 0.4.1 | Yes | Yes | Yes | Optional legacy server can fail | No content repair | Yes |
| 0.4.2 | Yes | Yes | Yes | Optional legacy server can fail | No content repair | Yes |
| 0.5.0 | Yes | Yes | Yes | Optional legacy services present | No content repair | Yes |
| 0.5.1 | Yes | Yes | Yes | Historical server connection fails | No content repair | Yes |
| 0.5.2 | Yes | Yes | Yes | Historical server connection fails | No content repair | Yes |
| 0.6.0 | Yes | Yes | Yes | Historical server connection fails | No content repair | Yes |
| 0.6.1 | Yes | Yes | Yes | Historical server connection fails | No content repair | Yes |
| 0.6.2 | Yes | Yes | Yes | Historical server connection fails | No content repair | Yes |

`Gameplay: Yes` means the historical menu or expected update screen loaded, a bundled track entered live play, the car and physics initialized, acceleration changed speed, steering and braking inputs were accepted, and reset returned the car to rest. Two bundled tracks were loaded in every release. It does not mean every complete course was manually driven end-to-end.

## Test method and limits

- Served the archive through a read-only local HTTP server at a versioned subdirectory path. No `file://` conclusions were used.
- Verified all 13 root entry pages and their direct local script and stylesheet references.
- Verified zero zero-byte files remain in playable game roots.
- Loaded the historically appropriate first-run screen or main menu for all 13 versions.
- Started live gameplay in every version. Acceleration, steering input, braking or reverse input, and restart were exercised.
- Loaded two included tracks in every version. Versions `0.3.0` and later displayed checkpoint state; `0.1.1` and `0.2.0` correctly lacked checkpoint counters.
- Inspected checkpoint, finish, and restart implementation markers in the corresponding historical bundles. A full finish-line and every checkpoint sequence were not manually completed on every track.
- Opened the editor in every version. Piece palettes and historical Test, Generate, Load, Save, and Export controls appeared. Export generation was verified in `0.3.1`; the newer track-settings/export flow was verified in `0.6.2`. Placement preview was exercised, but automated input did not provide a reliable final placement commit in every editor.
- Verified settings persistence across reload in `0.3.1` and `0.6.2`, then restored the test setting to Metric.
- Verified all 179 bundled audio files return HTTP 200 with byte lengths matching disk. UI and driving interactions produced no audio load or decode errors. Audible output was not subjectively evaluated by the automation.
- Keyboard driving and mouse menu/editor interaction were tested. Controller and touch behavior were inspected only by presence of historical implementation markers, not with physical devices.
- Security review found no obvious credential theft, cryptomining, unrelated downloader, or injected third-party modification. Ordinary historical platform integrations and Kodub service calls remain.

## Common original hash for zero-byte capture files

Every restored capture file below was zero bytes in the supplied ZIP and therefore had this original SHA-256:

`E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855`

Each replacement came from its exact official historical URL at `https://app-polytrack.kodub.com/<version>/<path>`. Each was then compared with the same path in an independently acquired, same-version PolyModLoader ASAR. All 52 comparisons were byte-identical. This is classified as authentic missing-file restoration, not custom code and not a neighboring-version substitution.

## 0.1.1

Repair type: Authentic missing-file restoration.

Historical behavior impact: Restores the intended original interface styling. No JavaScript, physics, track, control, or gameplay logic changed. The restoration is not a hosting shim.

| File | Repaired SHA-256 |
| --- | --- |
| `versions/0.1.1/css/customization.css` | `0C1D2F55C3921FFAAE86531CEC7E6159169C01FB7545642916786AA99BD8E3D9` |
| `versions/0.1.1/css/debug_ui.css` | `4DE96AD30B01C718D8B024E56F4D93D99285195DA76EA62DF99FB18CAAA3955A` |
| `versions/0.1.1/css/editor.css` | `B783A81784F2EB7E45EBCE6EC952B37562866DD5563637B48B0C9B3DD3AC1EBC` |
| `versions/0.1.1/css/hint.css` | `1571DBDF47C3596B2B9E0909307507FF8CFCE26855AFC2A050BFBA2C79D38573` |
| `versions/0.1.1/css/loading_ui.css` | `3A23307CDCEAAA3CA56A98428690EC526186274BF44DD51A95306F358C8C5113` |
| `versions/0.1.1/css/menu.css` | `100CF145B314B853572C65A8DFB0B9F550E3CE9E0B1D8D3E60ECA36CA01ACFBA` |
| `versions/0.1.1/css/message_box_ui.css` | `92E5444F57D2E88959ECF51A8430365ABB7B99ED5730BD4881621F7D6DC14E21` |
| `versions/0.1.1/css/speedometer.css` | `5599E06CB5408B0F42E3AABE4AAA89163C8A8EACECE46C1FD38DE62DEF86417D` |
| `versions/0.1.1/css/time_announcer.css` | `AEEA6F4217ACBAF7F3C148C29709F5813A5833ACFAB5EAB6D1D690D2C93FABF1` |
| `versions/0.1.1/css/timer.css` | `D08594F1C664BB4E0ACA3169AAC0F20B99A6814C16E3728D01AC4C46DAE9863B` |
| `versions/0.1.1/css/track_export_ui.css` | `B83BA94729EDD421CF83DB47647EE72A828E1F247A305443E6E2E7D6A38FC3B4` |
| `versions/0.1.1/css/track_selection_ui.css` | `2B9D0AAB699C644BFA4F75ECD9A1BF082FFE2EEB7469D49D136D9AA5D36FA27A` |
| `versions/0.1.1/css/transition_system.css` | `3D104052B766BDDA1369B4E478A62D88C6AB3B6B0C32EC2CB19B29BDCB1B2D0C` |

Confidence: Very high. Every file has matching official-host and same-version community-preserved bytes.

## 0.2.0

Repair type: Authentic missing-file restoration.

Historical behavior impact: Restores the intended original interface styling. No JavaScript, physics, track, control, or gameplay logic changed. The restoration is not a hosting shim.

| File | Repaired SHA-256 |
| --- | --- |
| `versions/0.2.0/css/customization.css` | `4DBA7CC1057E1D8ECB13268ED22AED3BFF69A8C3A1CD91A85077C60418A1C35E` |
| `versions/0.2.0/css/debug_ui.css` | `4DE96AD30B01C718D8B024E56F4D93D99285195DA76EA62DF99FB18CAAA3955A` |
| `versions/0.2.0/css/editor_height_selector.css` | `D3F8C1230DAD4A8B171C1D036A24BAC6B2AF172439579876D9CF2F5CEFA43FF2` |
| `versions/0.2.0/css/editor.css` | `08DBC411A2FB81513EEB2E19F36A08789ACB138B29802EE4DF2B0EE630F1CE14` |
| `versions/0.2.0/css/hint.css` | `1571DBDF47C3596B2B9E0909307507FF8CFCE26855AFC2A050BFBA2C79D38573` |
| `versions/0.2.0/css/loading_ui.css` | `015DD64360BC6FA0A2F6501115CD4F1E96945F0D2ECC5E542061558C1C246359` |
| `versions/0.2.0/css/menu.css` | `38AD6FAAFB7E1DFCC5900F2CF26835F29726B5D1B27BC02D915F4DFBE85B21DC` |
| `versions/0.2.0/css/message_box_ui.css` | `BACF9015C60B749A97173D11CA111E53BCCE84F0BF2FC575AD73E85FE9A51E37` |
| `versions/0.2.0/css/speedometer.css` | `3096E77681E20174BFEDD78D7AD8A6CD6B57A0EFC3B1F83CDCCC4ADA30F21A6F` |
| `versions/0.2.0/css/theme.css` | `B7632082C3B833A3CD38D905172314C6D373B097AA60C0EA43B3C2B8B85877C5` |
| `versions/0.2.0/css/time_announcer.css` | `342689691E90734F49A4B9191FBFE357C1CD50F4DA06823A318E7412BFA3D55F` |
| `versions/0.2.0/css/timer.css` | `CB48D9A065381CF1FC885CE005CE94DCAB421BC9C4C75B0B690877205341D113` |
| `versions/0.2.0/css/track_export_ui.css` | `9C7E4884ADE8B8BABE3FCFA5BC8EF833F6952D32074BAE9907390DA9B19E808C` |
| `versions/0.2.0/css/track_selection_ui.css` | `3F6EA657D2071F3E1E5332487A51566C474A0A5DCEF77CFAEBC338DA42215A7B` |
| `versions/0.2.0/css/transition_system.css` | `3D104052B766BDDA1369B4E478A62D88C6AB3B6B0C32EC2CB19B29BDCB1B2D0C` |

Confidence: Very high. Every file has matching official-host and same-version community-preserved bytes.

## 0.3.0

**No repair required.**

Only the unchanged extracted files were moved to the standard root `versions/0.3.0/`. Gameplay code and assets were not altered.

## 0.3.1

Repair type: Authentic missing-file restoration.

Historical behavior impact: Stylesheets restore intended presentation. `lib/ammo.js` restores the exact historical physics dependency and changes the extracted copy from nonbooting to its intended playable state. No custom shim, newer library, neighboring-release file, physics modification, or game-bundle edit was used. `ammo.js` is required for the historical game to run, not specifically for static hosting.

| File | Repaired SHA-256 |
| --- | --- |
| `versions/0.3.1/css/checkpoint_ui.css` | `5361EA20BD85CD57050989A56A75189DBA22A285EFDD2F0D7E89B42E18DE732D` |
| `versions/0.3.1/css/customization.css` | `4DBA7CC1057E1D8ECB13268ED22AED3BFF69A8C3A1CD91A85077C60418A1C35E` |
| `versions/0.3.1/css/debug_ui.css` | `4DE96AD30B01C718D8B024E56F4D93D99285195DA76EA62DF99FB18CAAA3955A` |
| `versions/0.3.1/css/editor_checkpoint_order.css` | `71785279B11DD8FEDF5EF9FB8CDE465EED7BD4CF5BC04F8074E15037685130E5` |
| `versions/0.3.1/css/editor_height_selector.css` | `D3F8C1230DAD4A8B171C1D036A24BAC6B2AF172439579876D9CF2F5CEFA43FF2` |
| `versions/0.3.1/css/editor.css` | `08DBC411A2FB81513EEB2E19F36A08789ACB138B29802EE4DF2B0EE630F1CE14` |
| `versions/0.3.1/css/hint.css` | `098A735C12A4028E6FE21B8B2AE752DB92EBA7D9D7D803D524AFD3D57DD8C7D0` |
| `versions/0.3.1/css/leaderboard.css` | `DC5CA90CD9843754610D37AC9F51BE14EE0E90739037564E55D0CC47234A1676` |
| `versions/0.3.1/css/loading_spinner.css` | `AF787EC0CE58D6530BC6C5D1D7C7195E8AAB294D3E6156B5BA9F661251409E38` |
| `versions/0.3.1/css/loading_ui.css` | `015DD64360BC6FA0A2F6501115CD4F1E96945F0D2ECC5E542061558C1C246359` |
| `versions/0.3.1/css/menu.css` | `0E37340C77C0FC743C9FD2D4FED5954847BF5E1D47D0E6347C24CD4FE8FBC736` |
| `versions/0.3.1/css/message_box_ui.css` | `1B3C239A4D8B33D17DC5C1E641A7A955775E7D1FC5F2F0D7162A5178B47A8A32` |
| `versions/0.3.1/css/nickname.css` | `FF6FE66D35A1B4F2B39BF9A74C33C0277BBA0A8B3DBE1C6DD4C4285783B698FC` |
| `versions/0.3.1/css/settings_menu.css` | `B1E664193F840974FFB259293D1F08BACECD6DA15157959EC2F5B295992BF2A2` |
| `versions/0.3.1/css/speedometer.css` | `3096E77681E20174BFEDD78D7AD8A6CD6B57A0EFC3B1F83CDCCC4ADA30F21A6F` |
| `versions/0.3.1/css/theme.css` | `7728BBE52D8DC9F21159FC86D363B5DC7199F9D756E71C874A8711A6BD70CD01` |
| `versions/0.3.1/css/time_announcer.css` | `678B03854E7392648AA0FAA6508D21A481A47B61A6D645A1E79B1A523874F549` |
| `versions/0.3.1/css/timer.css` | `585BA78FCFDF53FD3C3DC26D5F47E34920AB9E2ACC9DDE4B296CF8744A4823BB` |
| `versions/0.3.1/css/track_export_ui.css` | `9AAC9B0EAFD0E23479257A8D8642BA40C484CDFF978E9662B000639D33B20C3B` |
| `versions/0.3.1/css/track_info.css` | `D12EDA62EE6D57E122418546053FC199F865E3040868006168AA16EDABF57FC3` |
| `versions/0.3.1/css/track_selection_ui.css` | `85516692594425560F1853D1EE75F4AC0F035B67DE048F4B26463DC6F76CB6CC` |
| `versions/0.3.1/css/transition_system.css` | `3D104052B766BDDA1369B4E478A62D88C6AB3B6B0C32EC2CB19B29BDCB1B2D0C` |
| `versions/0.3.1/css/verifier.css` | `E7003548C82130F54BBFE69A2486A6AE2669FC45F3C8CE7BA09D77A0F12BE40F` |
| `versions/0.3.1/lib/ammo.js` | `E1854AC71F451348C98E86649AA90CFFD36EED3BEE4B06B018C062EB7C4B8BE8` |

`lib/ammo.js` source details:

- Official URL: `https://app-polytrack.kodub.com/0.3.1/lib/ammo.js`.
- Size: 1,766,286 bytes.
- Corroboration: Same path, size, and SHA-256 in the PolyModLoader `0.3.1` ASAR.
- Confidence: Very high.
- Result: `Ammo is not defined` is resolved; the menu, live physics, two tracks, editor, export, and settings all operate.

## 0.4.0

**No repair required.**

Only static-root layout normalization was performed. The profile-token warning is nonfatal and browser-state-related, so historical code was left unchanged.

## 0.4.1

**No repair required.**

Only static-root layout normalization was performed. Optional server failure does not block offline play.

## 0.4.2

**No repair required.**

Only static-root layout normalization was performed. Optional server failure does not block offline play.

## 0.5.0

**No repair required.**

Only static-root layout normalization was performed. Historical platform, leaderboard, replay, and community hooks remain intact.

## 0.5.1

**No repair required.**

Only static-root layout normalization was performed. The failed Kodub service connection is optional for core offline play, so no API fallback was added.

## 0.5.2

**No repair required.**

Only static-root layout normalization was performed. The failed Kodub service connection is optional for core offline play, so no API fallback was added.

## 0.6.0

**No repair required.**

Only static-root layout normalization was performed. The failed Kodub service connection is optional for core offline play, so no API fallback was added.

## 0.6.1

**No repair required.**

Only static-root layout normalization was performed. The `Update 0.6.1` screen is expected historical first-run behavior, its Continue action works, and the menu and gameplay follow normally. No update-screen or API fallback was added.

## 0.6.2

**No repair required.**

Only static-root layout normalization was performed. The `Update 0.6.2` screen is expected historical first-run behavior, its Continue action works, and the menu and gameplay follow normally. No update-screen or API fallback was added.

## Network classification

- `vps.kodub.com` is the historical Kodub service endpoint present from `0.3.0` onward. Bundle evidence associates it with profiles/tokens, leaderboards, replays/ghosts, and later community or multiplayer functionality.
- `app-polytrack-desktop.kodub.com` appears in `0.6.x` desktop-related configuration.
- Browser tests confirmed service failures are nonfatal to bundled tracks, local driving, editor use, and settings.
- Historical platform integrations such as CrazyGames, Poki, Y8, Armor Games, and itch.io are retained as original code. They were not redirected or replaced.
- No telemetry or historical online backend was recreated. No fake profile, leaderboard, replay, or community data was introduced.

## Static-hosting notes

- Final entry point for every release: `versions/<version>/index.html`.
- Direct entry-page local references are relative and resolve under a repository subdirectory.
- No gameplay bundle was mass-rewritten and no absolute-root path compatibility patch was needed.
- Later releases share origin-level browser state. A future launcher should navigate in one game tab or otherwise account for the historical multi-instance warning rather than opening many versions simultaneously on the same origin.
