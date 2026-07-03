// ===== COMIX LIST DATA =====
// To add a comic: copy one { ... } block and fill in the fields.
//   title  = comic name
//   image  = cover image path (delete this line if it has no cover)
//   store  = { img: store logo path, link: store URL }   <-- clickable logo, under the title
//
// Example:
//   { title: "حماده", image: "images/comix/hamada-cover.webp",
//     store: { img: "images/stores/itch.webp", link: "https://..." } }

const comix = [
    {
        title: "حماده",
        image: "images/comix/hamada-cover.webp",
        store: { img: "images/stores/itch.webp", link: "https://basem-ibrahim.itch.io/hamada-comic" }
    }
];

// ===== RENDERER (you won't usually need to touch this) =====
const list = document.getElementById("comix-list");

comix.forEach(comic => {
    const item = document.createElement("article");
    item.className = "comix-item";

    // cover image (left)
    if (comic.image) {
        const img = document.createElement("img");
        img.className = "comix-cover";
        img.src = comic.image;
        img.alt = comic.title;
        img.loading = "lazy";
        item.appendChild(img);
    }

    // right side: title + logo
    const right = document.createElement("div");
    right.className = "comix-info";

    const h2 = document.createElement("h2");
    comic.title.split("\n").forEach((line, i) => {
        if (i > 0) h2.appendChild(document.createElement("br"));
        h2.appendChild(document.createTextNode(line));
    });
    right.appendChild(h2);

    // clickable itch logo (under the title)
    if (comic.store) {
        const a = document.createElement("a");
        a.className = "comix-store";
        a.href = comic.store.link;
        a.target = "_blank";
        const logo = document.createElement("img");
        logo.src = comic.store.img;
        logo.alt = comic.title;
        logo.loading = "lazy";
        a.appendChild(logo);
        right.appendChild(a);
    }

    item.appendChild(right);
    list.appendChild(item);
});
