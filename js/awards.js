// ===== AWARDS PAGE DATA =====
// Single-subject page (like Dance). Each item has one of:
//   heading = centered year title on its own line
//   video   = YouTube video ID (part after watch?v=)
//   image   = centered, capped-width photo
//   note    = text-only item, right-aligned to the page (RTL, for Arabic)
// Add an item = add one object to this array.

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
    { image: "images/awards/2021-6.webp" },
    { heading: "Azeneth the Brave — Top 15 Finalist, Gaming Egypt Competition" },
    {
        video: "VAqlM_vpGtU"
    },

    { note: "حصلت قصة شادي وقصص أخرى على المركز الأول في مسابقة منصة كتبنا \"ومضة ما\" للقصص القصيرة جدا عام 2023. ونشرت القصص الفائزة ضمن كتاب بعنوان \"حكايات البحر والشمس والشاطئ\"." },
    { note: "فازت قصة \"عم صلاح\" في مسابقة عابرون 2025 للقصص القصيرة، والتي تنظمها مؤسسة عابر الثقافية و صدرت ضمن كتاب بعنوان \"عابرون 2025\" يضم القصص الفائزة." }
];

// ===== RENDERER =====
const list = document.getElementById("game-list");

items.forEach(data => {

    // Centered year heading on its own line
    if (data.heading) {
        const h = document.createElement("h2");
        h.className = "awards-heading";
        h.textContent = data.heading;
        list.appendChild(h);
        return;
    }

    // Text-only Arabic award item (RTL, right-aligned to page)
    if (data.note) {
        const p = document.createElement("p");
        p.className = "awards-note";
        p.textContent = data.note;
        list.appendChild(p);
        return;
    }

    // Centered image
    if (data.image) {
        const img = document.createElement("img");
        img.className = "awards-image";
        img.src = data.image;
        img.alt = "Award";
        img.loading = "lazy";
        list.appendChild(img);
        return;
    }

    // Click-to-load video
    if (data.video) {
        const box = document.createElement("div");
        box.className = "awards-video";

        const thumbImg = document.createElement("img");
        thumbImg.src = `https://img.youtube.com/vi/${data.video}/maxresdefault.jpg`;
        thumbImg.alt = "video";
        thumbImg.loading = "lazy";
        // YouTube returns a 120x90 gray placeholder when maxresdefault is missing
        // (it loads "successfully", so onerror won't fire). Detect that size and
        // fall back to mqdefault, which always exists.
        thumbImg.onload = function () {
            if (this.naturalWidth === 120 && this.naturalHeight === 90) {
                this.src = `https://img.youtube.com/vi/${data.video}/mqdefault.jpg`;
            }
        };

        const play = document.createElement("span");
        play.className = "awards-play";
        play.innerHTML = "&#9654;";

        box.appendChild(thumbImg);
        box.appendChild(play);

        box.addEventListener("click", () => {
            const iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${data.video}?autoplay=1`;
            iframe.allow = "autoplay; encrypted-media";
            iframe.allowFullscreen = true;
            box.innerHTML = "";
            box.appendChild(iframe);
        });

        list.appendChild(box);
        return;
    }
});
