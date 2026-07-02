// ===== EXPERIENCE MECCA PAGE DATA =====
// Each item can have any of:
//   title    = text shown above the item
//   heading  = a section title on its own (e.g. "Reviews")
//   image    = picture (big screenshot, or small logo if it has a link)
//   bigImage = true -> full-width image
//   link     = makes the image clickable and shrinks it to logo size
//   video    = YouTube video ID (the part after watch?v=)

const items = [
    {
        title: "Experience Mecca : The First Application from the middle east featured on Oculus Store",
        image: "images/experience-mecca/hero.webp"
    },
    {
        video: "u0xItRslRP8"
    },
    {
        video: "HF6rcxv0gSQ"
    },
    {
        heading: "Reviews"
    },
    {
        video: "ad5X9fd9UrM"
    },
    {
        title: "Review on The VR SHOP",
        image: "images/experience-mecca/vr-shop.webp",
        link: "https://www.virtual-reality-shop.co.uk/experience-mecca/"
    },
    {
        title: "Review on Quartz",
        image: "images/experience-mecca/quartz.webp",
        link: "https://qz.com/980821/mecca-in-vr-the-first-oculus-developer-from-the-middle-east-is-inviting-people-to-the-hajj"
    },
    {
        image: "images/experience-mecca/closing.webp",
        bigImage: true
    }
];

// ===== RENDERER =====
const list = document.getElementById("game-list");

items.forEach(data => {
    const item = document.createElement("article");
    item.className = "item";

    // Section heading on its own line (e.g. "Reviews")
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
        img.className = data.link ? "item-logo" : (data.bigImage ? "item-image-large" : "item-image");
        img.src = data.image;
        img.alt = data.title || "Experience Mecca";
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

    // Click-to-load video (identical behaviour to games.js)
    if (data.video) {
        const right = document.createElement("div");
        right.className = "item-video";

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

    list.appendChild(item);
});
