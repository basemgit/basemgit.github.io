// ===== APPS LIST DATA =====
// To add an app: copy one { ... } block and fill in the fields.
//   title  = app name
//   icon   = app icon path (WebP in images/apps/)
//   stores = list of store logos (each is clickable, links to the store)
//
// To add another store to an app, add another { img, link } to its stores array.
//   stores: [
//     { img: "images/stores/googleplay.webp", link: "https://play.google.com/..." },
//     { img: "images/stores/appstore.webp",   link: "https://apps.apple.com/..." }
//   ]

const apps = [
    { title: "Seena Pay",         icon: "images/apps/seena-pay.webp",         stores: [ { img: "images/stores/googleplay.webp", link: "https://play.google.com/store/apps/details?id=com.RKAnjel.SeenaPay" } ] },
    { title: "Handy Delivery",    icon: "images/apps/handy-delivery.webp",    stores: [ { img: "images/stores/googleplay.webp", link: "https://play.google.com/store/apps/details?id=com.iddma.handydelivery" } ] },
    { title: "zVendo",            icon: "images/apps/zvendo.webp",            stores: [ { img: "images/stores/googleplay.webp", link: "https://play.google.com/store/apps/details?id=zvendo.businessboomers.cpanel&hl=en" } ] },
    { title: "Swiss Trail",       icon: "images/apps/swiss-trail.webp",       stores: [ { img: "images/stores/googleplay.webp", link: "https://play.google.com/store/apps/details?id=com.orchtech.swiss_trail.swiss_trail" } ] },
    { title: "Purple Bureau",     icon: "images/apps/purple-bureau.webp",     stores: [ { img: "images/stores/googleplay.webp", link: "https://play.google.com/store/apps/details?id=purple.purplebureau_hr_system_android_frontend" } ] },
    { title: "My Street Weather", icon: "images/apps/my-street-weather.webp", stores: [ { img: "images/stores/googleplay.webp", link: "https://play.google.com/store/apps/details?id=com.basem.MyStreetWeather" } ] },
    { title: "Naos",              icon: "images/apps/naos.webp",              stores: [ { img: "images/stores/googleplay.webp", link: "https://play.google.com/store/apps/details?id=orchtech.purplebureau_hr_system_android_frontend" } ] },
    { title: "Juhayna",           icon: "images/apps/juhayna.webp",           stores: [ { img: "images/stores/googleplay.webp", link: "https://play.google.com/store/apps/details?id=com.orchtech.frontend.juhayna" } ] },
    { title: "Monsbaty",          icon: "images/apps/monsbaty.webp",          stores: [ { img: "images/stores/googleplay.webp", link: "https://play.google.com/store/apps/details?id=com.triangle4it.Monsbaty" } ] },
    { title: "Al Nahyan",         icon: "images/apps/al-nahyan.webp",         stores: [ { img: "images/stores/googleplay.webp", link: "https://play.google.com/store/apps/details?id=com.NA.AlNahyan" } ] },
    { title: "Misr Pharmacies",   icon: "images/apps/misr-pharmacies.webp",   stores: [ { img: "images/stores/googleplay.webp", link: "https://play.google.com/store/apps/details?id=com.colioo.misr" } ] },
    { title: "Heinz Selfie",      icon: "images/apps/heinz-selfie.webp",      stores: [ { img: "images/stores/googleplay.webp", link: "https://play.google.com/store/apps/details?id=com.viyu.HeinzSelfie" } ] }
];

// ===== RENDERER (you won't usually need to touch this) =====
const list = document.getElementById("apps-list");

apps.forEach(app => {
    const item = document.createElement("article");
    item.className = "app-item";

    // Title on top (full width)
    const h2 = document.createElement("h2");
    h2.textContent = app.title;
    item.appendChild(h2);

    // Bottom row: app icon + store logo(s) side by side
    const row = document.createElement("div");
    row.className = "app-row";

    if (app.icon) {
        const icon = document.createElement("img");
        icon.className = "app-icon";
        icon.src = app.icon;
        icon.alt = app.title;
        icon.loading = "lazy";
        row.appendChild(icon);
    }

    if (app.stores) {
        const stack = document.createElement("div");
        stack.className = "app-stores";
        app.stores.forEach(store => {
            const a = document.createElement("a");
            a.href = store.link;
            a.target = "_blank";
            const logo = document.createElement("img");
            logo.className = "app-store-logo";
            logo.src = store.img;
            logo.alt = app.title;
            logo.loading = "lazy";
            a.appendChild(logo);
            stack.appendChild(a);
        });
        row.appendChild(stack);
    }

    item.appendChild(row);
    list.appendChild(item);
});
