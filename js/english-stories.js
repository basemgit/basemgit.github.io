// ===== ENGLISH STORIES LIST DATA =====
// To add a book: copy one { ... } block and fill in the fields.
//   title  = book name
//   image  = cover image path (delete this line if the book has no cover)
//   buy    = single blue "Buy" button link          <-- use this OR stores, not both
//   stores = list of clickable store logos (stacked) <-- use this OR buy, not both
//
// SINGLE BUTTON example:
//   { title: "Fartastic", image: "images/novels-en/fartastic.webp", buy: "https://books2read.com/b/mBJzxO" }

const books = [
    { title: "Azeneth : The Girl Who Redefined Bravery", image: "images/novels-en/azeneth.webp", buy: "https://books2read.com/b/bQpP2d" },
    { title: "Fartastic", image: "images/novels-en/fartastic.webp", buy: "https://books2read.com/b/mBJzxO" }
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
