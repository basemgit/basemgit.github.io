// ===== AWARDS PAGE DATA =====
// heading = centered year title on its own line
// image   = centered, capped-width photo
// video   = YouTube video ID (part after watch?v=)

const items = [
    { heading: "iRead Awards 2022" },
    { video: "Ey0ptc2h2Ew" },
    { image: "images/awards/2022-1.webp" },
    { image: "images/awards/2022-2.webp" },

    { heading: "iRead Awards 2021" },
    { image: "images/awards/2021-1.webp" },
    { image: "images/awards/2021-2.webp" },
    { image: "images/awards/2021-3.webp" },
    { image: "images/awards/2021-4.webp" },
    { video: "DrjH7KpVYXo" },
    { image: "images/awards/2021-5.webp" },
    { image: "images/awards/2021-6.webp" }
];

// ===== RENDERER =====
const list = document.getElementById("game-list");

items.forEach(data => {
    const item = document.createElement("article");
    item.className = "item";

    // Centered year heading on its own line
    if (data.heading) {
        const h = document.createElement("h2");
        h.className = "awards-heading";
        h.textContent = data.heading;
        item.appendChild(h);
        list.appendChild(item);
        return;
    }

    // Centered image
    if (data.image) {
        const left = document.createElement("div");
        left.className = "item-left item-left-wide";

        const img = document.createElement("img");
        img.className = "item-image-centered";
        img.src = data.image;
        img.alt = "Award";
        img.loading = "lazy";

        left.appendChild(img);
        item.appendChild(left);
    }

    // Click-to-load video
    if (data.video) {
        const right = document.createElement("div");
        right.className = "item-video item-video-centered";

        const thumb = document.createElement("div");
        thumb.className = "video-thumb";

        const thumbImg = document.createElement("img");
        thumbImg.src = `https://img.youtube.com/vi/${data.video}/maxresdefault.jpg`;
        thumbImg.alt = "video";
        thumbImg.loading = "lazy";
        thumbImg.onerror = function () {
            this.onerror = null;
            this.src = `https://img.youtube.com/vi/${data.video}/mqdefault.jpg`;
        };

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

    list.appendChild(item);
});
