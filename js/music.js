// ===== MUSIC LIST DATA =====
// To add a song: copy one { ... } block and fill in the fields.
//   title = song name
//   image = cover image path (delete this line if the song has no cover)
//   link  = the "Play" button link (DistroKid)

const songs = [
    { title: "Stove", image: "images/music/Stove.webp", link: "https://push.fm/fl/lvmqqbhr" },
    { title: "The Kid", image: "images/music/the-kid.webp", link: "https://push.fm/fl/z6ev3wll" },
    { title: "Your Lane", image: "images/music/your-lane.webp", link: "https://push.fm/fl/q7bnqzep" },
    { title: "Wake Up", image: "images/music/wake-up.webp", link: "https://push.fm/fl/khornipj" },
    { title: "Don't Stop", image: "images/music/dont-stop.webp", link: "https://push.fm/fl/7dvkiprp" },
    { title: "Nonsense", image: "images/music/nonsense.webp", link: "https://push.fm/fl/mvz7zkvl" },
    { title: "Soap", image: "images/music/soap.webp", link: "https://push.fm/fl/51ax6bla" },
    { title: "Sublime", image: "images/music/sublime.webp", link: "https://push.fm/fl/cugdzj2z" },
    { title: "Choice", image: "images/music/choice.webp", link: "https://push.fm/fl/qxnxkdas" },
    { title: "Beso", image: "images/music/beso.webp", link: "https://push.fm/fl/rt0rmisq" },
    { title: "Scratch", image: "images/music/scratch.webp", link: "https://push.fm/fl/juhhs9np" },
    { title: "Squeaky Chair", image: "images/music/squeaky-chair.webp", link: "https://push.fm/fl/nt8z6yds" },
    { title: "It's Your Clay", image: "images/music/its-your-clay.webp", link: "https://push.fm/fl/eh8gzjz6" },
    { title: "Hard Target", image: "images/music/hard-target.webp", link: "https://push.fm/fl/tcubchke" },
    { title: "Jump", image: "images/music/jump.webp", link: "https://push.fm/fl/jdih0qxd" },
    { title: "I Told You So", image: "images/music/i-told-you-so.webp", link: "https://push.fm/fl/pr3whqwl" },
    { title: "Why?", image: "images/music/why.webp", link: "https://push.fm/fl/3wjtkxkc" },
    { title: "Odds", image: "images/music/odds.webp", link: "https://push.fm/fl/t2tsotix" },
    { title: "A Lovely Demon", image: "images/music/a-lovely-demon.webp", link: "https://push.fm/fl/0wt5tivj" },
    { title: "Sweet Nap", image: "images/music/sweet-nap.webp", link: "https://push.fm/fl/wsdbigxi" },
    { title: "Bastard", image: "images/music/bastard.webp", link: "https://push.fm/fl/qtzrzbhs" },
    { title: "Goat Hallucinations", image: "images/music/goat-hallucinations.webp", link: "https://push.fm/fl/49wz0jhp" },
    { title: "Stand Up", image: "images/music/stand-up.webp", link: "http://push.fm/fl/r7xrc9og" },
    { title: "First Kiss", image: "images/music/first-kiss.webp", link: "https://push.fm/fl/16m9rkvq" },
    { title: "I Didn't Do It", image: "images/music/i-didnt-do-it.webp", link: "https://push.fm/fl/oqk6r3zt" },
    { title: "White Lie", image: "images/music/white-lie.webp", link: "https://push.fm/fl/o4ozcqz0" },
    { title: "Chase", image: "images/music/chase.webp", link: "https://push.fm/fl/4wur3ec8" },
    { title: "Backwords Cap", image: "images/music/backwords-cap.webp", link: "https://push.fm/fl/k6farkqi" },
    { title: "Void", image: "images/music/void.webp", link: "https://push.fm/fl/08vtbnjv" },
    { title: "Shenanigans", image: "images/music/shenanigans.webp", link: "https://push.fm/fl/czw3rujb" },
    { title: "Pilonidal Cyst", image: "images/music/pilonidal-cyst.webp", link: "https://push.fm/fl/xetbkjzy" },
    { title: "Umbrella", image: "images/music/umbrella.webp", link: "https://push.fm/fl/mf0ij0s0" },
    { title: "Monday", image: "images/music/monday.webp", link: "https://push.fm/fl/zgdyqea7" },
    { title: "Fly", image: "images/music/fly.webp", link: "https://push.fm/fl/udxdnhdq" },
    { title: "Joy", image: "images/music/joy.webp", link: "https://push.fm/fl/fugvqiuk" },
    { title: "It's Been A Pleasure", image: "images/music/its-been-a-pleasure.webp", link: "https://push.fm/fl/ym74acoi" },
    { title: "Pinky Swear", image: "images/music/pinky-swear.webp", link: "https://push.fm/fl/bpu8nwyb" },
    { title: "Punch Back", image: "images/music/punch-back.webp", link: "https://push.fm/fl/7ns5heox" },
    { title: "Unleash", image: "images/music/unleash.webp", link: "https://push.fm/fl/xeo6svyl" },
    { title: "Sniffing The Clouds", image: "images/music/sniffing-the-clouds.webp", link: "https://push.fm/fl/fbtxo2ni" },
    { title: "Freedom", image: "images/music/freedom.webp", link: "https://push.fm/fl/9wii6dtw" },
    { title: "Mandala", image: "images/music/mandala.webp", link: "https://push.fm/fl/bubhwwdo" },
    { title: "Fine", image: "images/music/fine.webp", link: "https://push.fm/fl/i6obrucn" },
    { title: "Dream", image: "images/music/dream.webp", link: "https://push.fm/fl/yd80hykn" },
    { title: "Fiesta", image: "images/music/fiesta.webp", link: "https://push.fm/fl/bu07fogg" },
    { title: "Ticking", image: "images/music/ticking.webp", link: "https://push.fm/fl/mcmnp0em" },
    { title: "A.M", image: "images/music/am.webp", link: "https://push.fm/fl/9prqy4tl" },
    { title: "Gelato", image: "images/music/gelato.webp", link: "https://push.fm/fl/jhcuvlpj" },
    { title: "Funky Haircut", image: "images/music/funky-haircut.webp", link: "https://push.fm/fl/n0ej8bdv" },
    { title: "On The Sly", image: "images/music/on-the-sly.webp", link: "https://push.fm/fl/s6tmzffq" },
    { title: "Dash", image: "images/music/dash.webp", link: "https://push.fm/fl/dixu027b" },
    { title: "Cool Villain", image: "images/music/cool-villain.webp", link: "https://push.fm/fl/p9jjh5v9" },
    { title: "Fearless Surfer", image: "images/music/fearless-surfer.webp", link: "https://push.fm/fl/bf70iuxr" },
    { title: "Freska", image: "images/music/freska.webp", link: "https://push.fm/fl/ab3x8yl8" },
    { title: "Fisherman", image: "images/music/fisherman.webp", link: "https://push.fm/fl/id7bshpc" },
    { title: "Desert Party", image: "images/music/desert-party.webp", link: "https://push.fm/fl/bqs63jpz" },
    { title: "Exorcism", image: "images/music/exorcism.webp", link: "https://push.fm/fl/bri8kc1s" },
    { title: "Late Night Coffee", image: "images/music/late-night-coffee.webp", link: "https://push.fm/fl/sicbwott" },
    { title: "Underwater Dance", image: "images/music/underwater-dance.webp", link: "https://push.fm/fl/ja6fg7ju" },
    { title: "Spunky Donkey", image: "images/music/spunky-donkey.webp", link: "https://distrokid.com/hyperfollow/besomusic/spunky-donkey" }
];

// ===== RENDERER (you won't usually need to touch this) =====
const list = document.getElementById("music-list");

songs.forEach(song => {
    const item = document.createElement("article");
    item.className = "music-item";

    // LEFT: cover image (skipped if the song has no image)
    if (song.image) {
        const img = document.createElement("img");
        img.className = "cover";
        img.src = song.image;
        img.alt = song.title;
        img.loading = "lazy";
        item.appendChild(img);
    }

    // RIGHT: title + Play button
    const right = document.createElement("div");
    right.className = "music-right";

    const h2 = document.createElement("h2");
    h2.textContent = song.title;
    right.appendChild(h2);

    if (song.link) {
        const play = document.createElement("a");
        play.className = "play-button";
        play.href = song.link;
        play.target = "_blank";
        play.textContent = "Play";
        right.appendChild(play);
    }

    item.appendChild(right);
    list.appendChild(item);
});
