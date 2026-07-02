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
    },
    {
        title: "Puppy",
        image: "images/games/puppy.webp",
        video: "2xCmzlKi-ws",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.Puppy" }
        ]
    },
    {
        title: "Balls",
        image: "images/games/balls.webp",
        video: "cJ6mhLTiK0w",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.Balls" }
        ]
    },
    {
        title: "The Battle",
        image: "images/games/the-battle.webp",
        video: "J6f233bFsDQ",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.TheBattle" }
        ]
    },
    {
        title: "Bananas",
        image: "images/games/bananas.webp",
        video: "7VZmOTZElgc",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.Bananas" }
        ]
    },
    {
        title: "Kick And Chop",
        image: "images/games/kick-and-chop.webp",
        video: "ciiyOLnFDbI",
        buttons: [
            { store: "itch", link: "https://basem-ibrahim.itch.io/kick-and-chop" }
        ]
    },
    {
        title: "Frenzy",
        image: "images/games/frenzy.webp",
        video: "sAclRs57Ick",
        buttons: [
            { store: "itch", link: "https://basem-ibrahim.itch.io/frenzy" }
        ]
    },
    {
        title: "Hell",
        image: "images/games/hell.webp",
        video: "kqOAy6an5Ws",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.Hell" }
        ]
    },
    {
        title: "Rescue",
        image: "images/games/rescue.webp",
        video: "T19TxZt162k",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.Rescue" }
        ]
    },
    {
        title: "Boxes",
        image: "images/games/boxes.webp",
        video: "tmeHeVqQtZ8",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.Boxes" }
        ]
    },
    {
        title: "Hamada حماده",
        image: "images/games/hamada.webp",
        video: "6-OtEpBLTK0",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.Hamada" }
        ]
    },
    {
        title: "Shoot",
        image: "images/games/shoot.webp",
        video: "r6ijYV4XWL0",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.Shoot" }
        ]
    },
    {
        title: "Squares",
        image: "images/games/squares.webp",
        video: "JLPd6iMCRVU",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.Squares" }
        ]
    },
    {
        title: "The Black Balloon",
        image: "images/games/the-black-balloon.webp",
        video: "id2cD-9B9Bg",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.TheBlackBalloon" }
        ]
    },
    {
        title: "Circles",
        image: "images/games/circles.webp",
        video: "5e0SngnJdm8",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.Circles" }
        ]
    },
    {
        title: "Donkey Football",
        image: "images/games/donkey-football.webp",
        video: "7UDV4n4hw_U",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.DonkeyFootball" }
        ]
    },
    {
        title: "Wait & Hit ثبت صنم",
        image: "images/games/wait-and-hit.webp",
        video: "jmu2MefQd2E",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basemibrahim.waitAndHit" }
        ]
    },
    {
        title: "Azeneth The Brave",
        image: "images/games/azeneth.webp",
        video: "193KEe41pVM",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.BasemIbrahim.Azeneth" }
        ]
    },
    {
        title: "Fartastic",
        image: "images/games/fartastic.webp",
        video: "8WU0nRVWWmo",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basem.Fartastic" }
        ]
    },
    {
        title: "Whistle To Fart Prank",
        image: "images/games/whistle-to-fart.webp",
        buttons: [
            { store: "googleplay", link: "https://play.google.com/store/apps/details?id=com.basem.Whistle_To_Fart_Prank" }
        ]
    },
    {
        title: "Colorful",
        image: "images/games/colorful.webp",
        buttons: [
            { store: "kongregate", link: "https://www.kongregate.com/games/gamedeveloper/colorful" }
        ]
    },
    {
        title: "Bat Ball",
        image: "images/games/bat-ball.webp",
        buttons: [
            { store: "kongregate", link: "https://www.kongregate.com/games/gamedeveloper/batball" }
        ]
    },
    {
        title: "Shut'm Up",
        image: "images/games/shutm-up.webp",
        buttons: [
            { store: "kongregate", link: "https://www.kongregate.com/games/gamedeveloper/shutm-up" }
        ]
    },
    {
        title: "Space Word Picker",
        image: "images/games/space-word-picker.webp",
        buttons: [
            { store: "kongregate", link: "https://www.kongregate.com/games/gamedeveloper/space-word-picker" }
        ]
    },
    {
        title: "City Driver",
        image: "images/games/city-driver.webp",
        buttons: [
            { store: "kongregate", link: "https://www.kongregate.com/games/gamedeveloper/citydriver" }
        ]
    },
    {
        title: "10 Seconds Racing",
        image: "images/games/10-seconds-racing.webp",
        buttons: [
            { store: "kongregate", link: "https://www.kongregate.com/games/gamedeveloper/10secondsracing" }
        ]
    },
    {
        title: "Kooky",
        image: "images/games/kooky.webp",
        buttons: [
            { store: "kongregate", link: "https://www.kongregate.com/games/gamedeveloper/kooky" }
        ]
    },
    {
        title: "Guess What",
        image: "images/games/guess-what.webp",
        buttons: [
            { store: "kongregate", link: "https://www.kongregate.com/games/gamedeveloper/guess-what" }
        ]
    },
    {
        title: "Hungry Bee",
        image: "images/games/hungry-bee.webp",
        buttons: [
            { store: "kongregate", link: "https://www.kongregate.com/games/gamedeveloper/hungry-bee" }
        ]
    },
    {
        title: "Dolphin VS Ball",
        image: "images/games/dolphin-vs-ball.webp",
        buttons: [
            { store: "kongregate", link: "https://www.kongregate.com/games/gamedeveloper/dolphin-vs-ball" }
        ]
    },
    {
        title: "Hero Or Zero (Global Game Jam)",
        image: "images/games/hero-or-zero.webp",
        video: "XFBduwh_y00",
        buttons: [
            { store: "kongregate", link: "https://www.kongregate.com/games/gamedeveloper/hero-or-zero" },
            { store: "ggj", link: "https://2013.globalgamejam.org/2013/hero-or-zero" }
        ]
    }
];

// Store logo images live in images/stores/ (reused across all games)
const storeLogos = {
    meta:       "images/stores/meta.webp",
    googleplay: "images/stores/googleplay.webp",
    itch:       "images/stores/itch.webp",
    amazon:     "images/stores/amazon.webp",
    kongregate: "images/stores/kongregate.webp",
    ggj:        "images/stores/ggj.webp"
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

        const thumbImg = document.createElement("img");
        thumbImg.src = `https://img.youtube.com/vi/${game.video}/mqdefault.jpg`;
        thumbImg.alt = game.title + " video";
        thumbImg.loading = "lazy";

        const play = document.createElement("span");
        play.className = "play-icon";
        play.innerHTML = "&#9654;";

        thumb.appendChild(thumbImg);
        thumb.appendChild(play);

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
