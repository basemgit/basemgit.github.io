// ===== ARABIC STORIES LIST DATA =====
// To add a book: copy one { ... } block and fill in the fields.
//   title  = book name
//   image  = cover image path (delete this line if the book has no cover)
//   buy    = single blue "Buy" button link          <-- use this OR stores, not both
//   stores = list of clickable store logos (stacked) <-- use this OR buy, not both
//
// SINGLE BUTTON example:
//   { title: "عشق", image: "images/novels/eshq.webp", buy: "https://books2read.com/b/4jVnW5" }
//
// MULTIPLE STORES example:
//   { title: "حسنوس", image: "images/novels/hasnous.webp",
//     stores: [ { img: "images/stores/abjjad.webp", link: "https://..." } ] }

const books = [
    { title: "البط البرتقالي", image: "images/novels/albat-albortoqali.webp",
        stores: [
            { img: "images/stores/abjjad.webp",      link: "https://www.abjjad.com/book/1034087530529/%D8%A7%D9%84%D8%A8%D8%B7-%D8%A7%D9%84%D8%A8%D8%B1%D8%AA%D9%82%D8%A7%D9%84%D9%8A/1033786884129" },
            { img: "images/stores/aseeralkotb.webp", link: "https://cdn.aseeralkotb.com/en/books/65760" },
            { img: "images/stores/kotopia.webp",     link: "https://kotopia.store/s/kotopia/product/%D8%A7%D9%84%D8%A8%D8%B7-%D8%A7%D9%84%D8%A8%D8%B1%D8%AA%D9%82%D8%A7%D9%84%D9%8A?page=0,2" }
        ]
    },
    { title: "حسنوس", image: "images/novels/hasnous.webp",
        stores: [
            { img: "images/stores/abjjad.webp", link: "https://www.abjjad.com/book/1034046341124/%D8%AD%D8%B3%D9%86%D9%88%D8%B3/1033745694724" }
        ]
    },
    { title: "قصة الحاج موردخاى\nالمركز الأول\nكتاب كانت هتفرق", image: "images/novels/kanet-hatfor2.webp",
        stores: [
            { img: "images/stores/ireadhub.webp", link: "https://ireadhub.com/book/%D9%83%D8%A7%D9%86%D8%AA-%D9%87%D8%AA%D9%81%D8%B1%D9%82/" }
        ]
    },
    { title: "اليوم الأخير", image: "images/novels/el-yom-el-akheer.webp",
        stores: [
            { img: "images/stores/ireadhub-shop.webp", link: "https://shop.ireadhub.com/products/%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1" },
            { img: "images/stores/alrewaq.webp",       link: "https://alrewaqpublishing.com/product/%d8%a7%d9%84%d9%8a%d9%88%d9%85-%d8%a7%d9%84%d8%a3%d8%ae%d9%8a%d8%b1/" }
        ]
    },
    { title: "صالة الحاجة سنية للألعاب الرياضية", image: "images/novels/salet-sonia.webp", buy: "https://books2read.com/b/brl51A" },
    { title: "عشق", image: "images/novels/eshq.webp", buy: "https://books2read.com/b/4jVnW5" },
    { title: "ليلة في حضن أبي", image: "images/novels/layla-fi-hodn-abi.webp", buy: "https://books2read.com/b/3LzZdN" },
    { title: "بيلا", image: "images/novels/bella.webp", buy: "https://books2read.com/b/4AWNre" },
    { title: "سلق بيض", image: "images/novels/sal2-beed.webp", buy: "https://books2read.com/b/mKjQkE" },
    { title: "ظلام", image: "images/novels/zalam.webp", buy: "https://books2read.com/b/bPABE7" },
    { title: "إلى عزيزي مخيمر", image: "images/novels/ela-azizi-mokhaimar.webp", buy: "https://books2read.com/b/mKjoDy" },
    { title: "شهد", image: "images/novels/shahd.webp", buy: "https://books2read.com/b/4XGJx6" },
    { title: "سمكة", image: "images/novels/samaka.webp", buy: "https://books2read.com/b/bOLYWJ" },
    { title: "كمفورت أو إس", image: "images/novels/comfort-os.webp", buy: "https://books2read.com/b/3GR2On" },
    { title: "سينما لوليتا", image: "images/novels/cinema-lolita.webp", buy: "https://books2read.com/b/bPEG9d" },
    { title: "إنترفيو", image: "images/novels/interview.webp", buy: "https://books2read.com/b/m2Aywk" },
    { title: "خيال حلمي", image: "images/novels/khayal-helmy.webp", buy: "https://books2read.com/b/31Lx5D" },
    { title: "أسمهان هانم", image: "images/novels/asmahan-hanem.webp", buy: "https://books2read.com/b/3nzZg9" },
    { title: "خيال حلمي", image: "images/novels/khayal-helmy-2.webp", buy: "https://books2read.com/b/bPDyWj" },
    { title: "انجليش كيك", image: "images/novels/english-cake.webp", buy: "https://books2read.com/b/3L5yeM" },
    { title: "ا.د حمار", image: "images/novels/ad-homar.webp", buy: "https://books2read.com/b/31BekM" },
    { title: "نور", image: "images/novels/noor.webp", buy: "https://books2read.com/b/4Aapne" },
    { title: "صرصار مان", image: "images/novels/sarsar-man.webp", buy: "https://books2read.com/b/b5YX9p" },
    { title: "الممحون", image: "images/novels/el-mamhoon.webp", buy: "https://books2read.com/b/m2KYpk" },
    { title: "بيض", image: "images/novels/beed.webp", buy: "https://books2read.com/b/38OyB7" },
    { title: "العملية ن.س.ف", image: "images/novels/operation-nsf.webp", buy: "https://books2read.com/b/4E7l5e" },
    { title: "أسطورة الرجل الذى يأكل النساء", image: "images/novels/ostora.webp", buy: "https://books2read.com/b/bp1w5l" },
    { title: "كافر", image: "images/novels/kafer.webp", buy: "https://books2read.com/b/3y9KYB" },
    { title: "يحيى", image: "images/novels/yahia.webp", buy: "https://books2read.com/b/b6aRyx" },
    { title: "B-Miracle", image: "images/novels/b-miracle.webp", buy: "https://books2read.com/b/49avpp" }
];

// ===== RENDERER (you won't usually need to touch this) =====
const list = document.getElementById("books-list");

books.forEach(book => {
    const item = document.createElement("article");
    item.className = "book-item";

    // LEFT (in RTL: right side): cover image
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
