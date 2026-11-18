// ===== ENGLISH STORIES LIST DATA =====
// To add a book: copy one { ... } block and fill in the fields.
//   title  = book name
//   image  = cover image path (delete this line if the book has no cover)
//   buy    = single blue "Buy" button link          <-- use this OR stores, not both
//   stores = list of clickable store logos (stacked) <-- use this OR buy, not both
//   app    = optional "App" button link (Google Play)  <-- can combine with buy OR stores
//   itch   = optional "itch" button link (itch.io)      <-- can combine with buy OR stores
//
// SINGLE BUTTON example:
//   { title: "Fartastic", image: "images/novels-en/fartastic.webp", buy: "https://books2read.com/b/mBJzxO" }
//
// WITH APP BUTTON example:
//   { title: "Fartastic", image: "images/novels-en/fartastic.webp", buy: "https://books2read.com/b/mBJzxO",
//     app: "https://play.google.com/store/apps/details?id=..." }
//
// WITH ITCH BUTTON example:
//   { title: "Fartastic", image: "images/novels-en/fartastic.webp", buy: "https://books2read.com/b/mBJzxO",
//     itch: "https://basem-ibrahim.itch.io/..." }

const books = [
    { title: "Kiki", image: "images/novels-en/kiki.webp", app: "https://play.google.com/store/apps/details?id=com.basemibrahim.ReaderKiki", itch: "https://basem-ibrahim.itch.io/kiki" }
    
];

// ===== RENDERER (you won't usually need to touch this) =====
const list = document.getElementById("books-list");

books.forEach(book => {
    const item = document.createElement("article");
    item.className = "book-item";

    // cover image
    if (book.image) {
        const img = document.createElement("img");
        img.className = "book-cover";
        img.src = book.image;
        img.alt = book.title;
        img.loading = "lazy";
        item.appendChild(img);
    }

    // title + button(s)
    const right = document.createElement("div");
    right.className = "book-info";

    const h2 = document.createElement("h2");
    book.title.split("\n").forEach((line, i) => {
        if (i > 0) h2.appendChild(document.createElement("br"));
        h2.appendChild(document.createTextNode(line));
    });
    right.appendChild(h2);

    // Single blue Buy button
    if (book.buy) {
        const buy = document.createElement("a");
        buy.className = "book-buy";
        buy.href = book.buy;
        buy.target = "_blank";
        buy.textContent = "Buy";
        right.appendChild(buy);
    }

    // Optional App button (Google Play)
    if (book.app) {
        const app = document.createElement("a");
        app.className = "book-app";
        app.href = book.app;
        app.target = "_blank";
        app.textContent = "App";
        right.appendChild(app);
    }

    // Optional itch button (itch.io)
    if (book.itch) {
        const itch = document.createElement("a");
        itch.className = "book-itch";
        itch.href = book.itch;
        itch.target = "_blank";
        itch.textContent = "itch";
        right.appendChild(itch);
    }

    // Multiple stores: stacked clickable logos
    if (book.stores) {
        const stack = document.createElement("div");
        stack.className = "store-stack";
        book.stores.forEach(store => {
            const a = document.createElement("a");
            a.href = store.link;
            a.target = "_blank";
            const logo = document.createElement("img");
            logo.className = "store-logo";
            logo.src = store.img;
            logo.alt = book.title;
            logo.loading = "lazy";
            a.appendChild(logo);
            stack.appendChild(a);
        });
        right.appendChild(stack);
    }

    item.appendChild(right);
    list.appendChild(item);
});
