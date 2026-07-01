// ===== GAME LIST DATA =====
// To add a game: copy one { ... } block and fill in the fields.
// Any field you don't need, just delete that line.
//   video   = the YouTube video ID (the part after /embed/)
//   buttons = array of store links; each has a "store" (logo key) and "link"

const games = [
    {
        title: "Smash",
        image: "images/games/smash.webp",
        video: "NbMdpXqrLf8",
        buttons: [
            { store: "meta", link: "https://www.meta.com/experiences/smash/24864752229890385/" }
        ]
    },
    {
        title: "Puppy",
        image: "images/games/puppy.webp",
        video: "2xCmzlKi-ws",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.Puppy" }
        ]
    },
    {
        title: "Balls",
        image: "images/games/balls.webp",
        video: "cJ6mhLTiK0w",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.Balls" }
        ]
    },
    {
        title: "The Battle",
        image: "images/games/the-battle.webp",
        video: "J6f233bFsDQ",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.TheBattle" }
        ]
    },
    {
        title: "Bananas",
        image: "images/games/bananas.webp",
        video: "7VZmOTZElgc",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.Bananas" }
        ]
    },
    {
        title: "Kick And Chop",
        image: "images/games/kick-and-chop.webp",
        video: "ciiyOLnFDbI",
        buttons: [
            { store: "itch", link: "https://basem-ibrahim.itch.io/kick-and-chop" }
        ]
    }
];

// Store logo images live in images/stores/ (reused across all games)
const storeLogos = {
    meta:       "images/stores/meta.webp",
    googleplay: "images/stores/googleplay.webp",
    itch:       "images/stores/itch.webp",
    amazon:     "images/stores/amazon.webp"
};

// ===== RENDERER (you won't usually need to touch this) =====
const list = document.getElementById("game-list");

games.forEach(game => {
    const item = document.createElement("article");
    item.className = "item";

    // LEFT column: title, icon, store buttons
    const left = document.createElement("div");
    left.className = "item-left";

    const h2 = document.createElement("h2");
    h2.textContent = game.title;
    left.appendChild(h2);

    if (game.image) {
        const img = document.createElement("img");
        img.className = "item-icon";
        img.src = game.image;
        img.alt = game.title;
        img.loading = "lazy";
        left.appendChild(img);
    }

    if (game.buttons && game.buttons.length) {
        const btnRow = document.createElement("div");
        btnRow.className = "item-buttons";
        game.buttons.forEach(b => {
            const a = document.createElement("a");
            a.href = b.link;
            a.target = "_blank";
            const logo = document.createElement("img");
            logo.src = storeLogos[b.store] || b.store;
            logo.alt = b.store;
            logo.loading = "lazy";
            a.appendChild(logo);
            btnRow.appendChild(a);
        });
        left.appendChild(btnRow);
    }

    item.appendChild(left);

    // RIGHT column: click-to-load video
    if (game.video) {
        const right = document.createElement("div");
        right.className = "item-video";

        const thumb = document.createElement("div");
        thumb.className = "video-thumb";

        const thumbImg = document.createElement("img");
        thumbImg.src = `https://img.youtube.com/vi/${game.video}/mqdefault.jpg`;
        thumbImg.alt = game.title + " video";
        thumbImg.loading = "lazy";

        const play = document.createElement("span");
        play.className = "play-icon";
        play.innerHTML = "&#9654;";

        thumb.appendChild(thumbImg);
        thumb.appendChild(play);

        thumb.addEventListener("click", () => {
            const iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${game.video}?autoplay=1`;
            iframe.allow = "autoplay; encrypted-media";
            iframe.allowFullscreen = true;
            right.innerHTML = "";
            right.appendChild(iframe);
        });
        right.appendChild(thumb);
        item.appendChild(right);
    }

    list.appendChild(item);
});
