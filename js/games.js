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
        thumb.style.backgroundImage =
            `url(https://img.youtube.com/vi/${game.video}/hqdefault.jpg)`;
        thumb.innerHTML = '<span class="play-icon">&#9654;</span>';
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