// ===== OTHER PAGE DATA =====
// Each item can have any of:
//   title    = text shown above the item
//   heading  = a section title on its own (e.g. "Reviews")
//   image    = picture
//   bigImage = true -> full-width image
//   centered = true -> capped-width, centered on the page
//   link     = makes the image clickable and shrinks it to logo size
//   video    = YouTube video ID (the part after watch?v=)  -> click-to-play
//   vimeo    = Vimeo video ID (the number in the URL)       -> embedded directly

const items = [
    {
        video: "Jr-zs2aM9Dg"
    },
    {
        video: "5aiQg78qrB0"
    }
];

// ===== RENDERER =====
const list = document.getElementById("game-list");

items.forEach(data => {
    const item = document.createElement("article");
    item.className = "item";

    // Section heading on its own line
    if (data.heading) {
        const h = document.createElement("h2");
        h.className = "section-heading";
        h.textContent = data.heading;
        item.appendChild(h);
        list.appendChild(item);
        return;
    }

    // LEFT column: title + image (image clickable if there's a link)
    const left = document.createElement("div");
    left.className = "item-left item-left-wide";

    if (data.title) {
        const h2 = document.createElement("h2");
        h2.textContent = data.title;
        left.appendChild(h2);
    }

    if (data.image) {
        const img = document.createElement("img");
        img.className = data.link
            ? "item-logo"
            : (data.centered
                ? "item-image-centered"
                : (data.bigImage ? "item-image-large" : "item-image"));
        img.src = data.image;
        img.alt = data.title || "Other";
        img.loading = "lazy";

        if (data.link) {
            const a = document.createElement("a");
            a.href = data.link;
            a.target = "_blank";
            a.rel = "noopener";
            a.appendChild(img);
            left.appendChild(a);
        } else {
            left.appendChild(img);
        }
    }

    if (data.title || data.image) {
        item.appendChild(left);
    }

    // Click-to-load YouTube video
    if (data.video) {
        const right = document.createElement("div");
        right.className = "item-video item-video-centered";

        const thumb = document.createElement("div");
        thumb.className = "video-thumb";

        const thumbImg = document.createElement("img");
        thumbImg.src = `https://img.youtube.com/vi/${data.video}/mqdefault.jpg`;
        thumbImg.alt = "video";
        thumbImg.loading = "lazy";

        const play = document.createElement("span");
        play.className = "play-icon";
        play.innerHTML = "&#9654;";

        thumb.appendChild(thumbImg);
        thumb.appendChild(play);

        thumb.addEventListener("click", () => {
            const iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${data.video}?autoplay=1`;
            iframe.allow = "autoplay; encrypted-media";
            iframe.allowFullscreen = true;
            right.innerHTML = "";
            right.appendChild(iframe);
        });
        right.appendChild(thumb);
        item.appendChild(right);
    }

    // Vimeo video embedded directly (lazy-loaded, no API, no thumbnail)
    if (data.vimeo) {
        const right = document.createElement("div");
        right.className = "item-video item-video-centered";

        const iframe = document.createElement("iframe");
        iframe.src = `https://player.vimeo.com/video/${data.vimeo}`;
        iframe.allow = "fullscreen; picture-in-picture";
        iframe.allowFullscreen = true;
        iframe.loading = "lazy";

        right.appendChild(iframe);
        item.appendChild(right);
    }

    list.appendChild(item);
});
