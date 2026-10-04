/* PolyTrack Archive launcher. PolyTrack was created by Kodub; this archive was assembled by StaticQuasar931. */

const ARCHIVE = Object.freeze({
    title: "PolyTrack Archive",
    author: "StaticQuasar931",
    authorUrl: "https://sites.google.com/view/staticquasar931/gm3z",
    githubUrl: "https://github.com/StaticQuasar931",
    creator: "Kodub",
    description: "Unofficial historical archive of PolyTrack releases from 0.1.1 through 0.6.3."
});

const VERSIONS = Object.freeze([
    { version: "0.1.1", releaseDate: "20 Dec 2022", description: "An important early browser update that repaired finish-screen behavior and Firefox interface and audio issues.", tag: "Early web build", accent: "#64e7ff", image: "assets/release-images/0.1.1.png", imageType: "scene" },
    { version: "0.2.0", releaseDate: "21 Mar 2023", description: "Introduced ghost replays, a refreshed interface and logo, background mountains, and tracks 5 through 7.", tag: "Ghost replays", accent: "#7ce8ff", image: "assets/release-images/0.2.0.png", imageType: "scene" },
    { version: "0.3.0", releaseDate: "22 Oct 2023", description: "The checkpoint and leaderboard milestone, with settings, cockpit camera, dynamic clouds, music, and tracks 8 through 10.", tag: "Checkpoints", accent: "#a8f47b", image: "assets/release-images/0.3.0.png", imageType: "scene" },
    { version: "0.3.1", releaseDate: "29 Oct 2023", description: "A focused follow-up that added the Discord link, made leaderboard results verifiable, and tightened online result checking.", tag: "Leaderboard era", accent: "#c7ff6b", image: "assets/release-images/0.3.1.png", imageType: "scene" },
    { version: "0.4.0", releaseDate: "29 Jul 2024", description: "Expanded the web game with replay viewing, profile sync, mobile controls, 100 editor parts, and tracks 11 through 13.", tag: "Replays and mobile", accent: "#ffe07a", image: "assets/release-images/0.4.0.png", imageType: "scene" },
    { version: "0.4.1", releaseDate: "15 Aug 2024", description: "A practical polish update with clearer editor guidance plus fixes for mobile controls, importing, timing, and results.", tag: "Editor polish", accent: "#ffd16b", image: "assets/release-images/0.4.1.png", imageType: "scene" },
    { version: "0.4.2", releaseDate: "01 Nov 2024", description: "A maintenance release that improved corrupt-track reporting, Firefox compatibility, display scaling, and performance.", tag: "Maintenance update", accent: "#ffbd63", image: "assets/release-images/0.4.2.png", imageType: "scene" },
    { version: "0.5.0", releaseDate: "07 Apr 2025", description: "The big Winter and Desert update added more tracks, respawnable checkpoints, new parts, and editor workflow upgrades.", tag: "Winter and Desert", accent: "#ffad5c", image: "assets/release-images/0.5.0.jpg", imageType: "scene" },
    { version: "0.5.1", releaseDate: "16 Jul 2025", description: "Brought cascaded shadows, editor undo and redo, and community tracks to the historical web build.", tag: "Shadows and undo", accent: "#ff9d71", image: "assets/release-images/0.5.1.jpg", imageType: "scene" },
    { version: "0.5.2", releaseDate: "05 Nov 2025", description: "Expanded community tracks and leaderboard feedback while adding clearer warnings for software rendering.", tag: "Community tracks", accent: "#ff8b82", image: "assets/release-images/0.5.2.jpg", imageType: "scene" },
    { version: "0.6.0", releaseDate: "10 Mar 2026", description: "A major multiplayer and car-customization release, with the garage becoming part of the PolyTrack experience.", tag: "Major update", accent: "#df89ff", image: "assets/release-images/0.6.0.jpg", imageType: "scene" },
    { version: "0.6.1", releaseDate: "26 May 2026", description: "Improved the multiplayer experience with invitations, smoother loading, and additional community-track support.", tag: "0.6 series", accent: "#ad9aff", image: "assets/release-images/0.6.1.jpg", imageType: "scene" },
    { version: "0.6.2", releaseDate: "31 May 2026", description: "A maintenance release that removed Natsu's hidden finish line and fixed editor camera movement and several other issues.", tag: "0.6 series", accent: "#80a9ff", image: "assets/release-images/0.6.2.jpg", imageType: "scene" },
    { version: "0.6.3", releaseDate: "16 Sep 2026", description: "Added Track of the Week, a new player tutorial, and fresh community tracks, with version tabs and usability improvements.", tag: "Track of the Week", accent: "#67f0d2", image: "assets/release-images/0.6.3.png", imageType: "scene" }
]);

const releaseGrid = document.querySelector("#release-grid");

function createReleaseCard(release) {
    const item = document.createElement("li");
    item.className = `release-card release-card--${release.imageType}`;
    item.style.setProperty("--card-accent", release.accent);

    item.innerHTML = `
        <div class="release-card__top">
            <div class="release-card__media">
                <img src="${release.image}" alt="PolyTrack ${release.version} from the matching preserved historical build" width="800" height="450" loading="lazy" decoding="async">
            </div>
            <div class="release-card__meta"><span>PolyTrack</span><time>${release.releaseDate}</time></div>
            <h3 class="release-card__version">${release.version}</h3>
            <span class="release-card__tag">${release.tag}</span>
            <p class="release-card__description">${release.description}</p>
        </div>
        <a class="release-card__launch" href="versions/${release.version}/index.html" aria-label="Launch PolyTrack ${release.version}"><span>Play version ${release.version}</span></a>
    `;
    return item;
}

VERSIONS.forEach((release) => releaseGrid.append(createReleaseCard(release)));

const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: ARCHIVE.title,
    description: ARCHIVE.description,
    creator: {
        "@type": "Person",
        name: ARCHIVE.author,
        url: ARCHIVE.authorUrl
    },
    about: {
        "@type": "VideoGame",
        name: "PolyTrack",
        author: { "@type": "Person", name: ARCHIVE.creator }
    }
};

const structuredDataScript = document.createElement("script");
structuredDataScript.type = "application/ld+json";
structuredDataScript.textContent = JSON.stringify(structuredData);
document.head.append(structuredDataScript);
