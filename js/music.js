// ===== MUSIC LIST DATA =====
// To add a song: copy one { ... } block and fill in the fields.
//   title = song name
//   image = cover image path (delete this line if the song has no cover)
//   link  = the "Play" button link (DistroKid)

const songs = [
    { title: "The Kid", image: "images/music/the-kid.webp", link: "https://distrokid.com/hyperfollow/besomusic/the-kid" },
    { title: "Your Lane", image: "images/music/your-lane.webp", link: "https://distrokid.com/hyperfollow/besomusic/your-lane" },
    { title: "Wake Up", image: "images/music/wake-up.webp", link: "https://distrokid.com/hyperfollow/besomusic/wake-up" },
    { title: "Don't Stop", image: "images/music/dont-stop.webp", link: "https://distrokid.com/hyperfollow/besomusic/dont-stop" },
    { title: "Nonsense", image: "images/music/nonsense.webp", link: "https://distrokid.com/hyperfollow/besomusic/nonsense" },
    { title: "Soap", image: "images/music/soap.webp", link: "https://distrokid.com/hyperfollow/besomusic/soap" },
    { title: "Sublime", image: "images/music/sublime.webp", link: "https://distrokid.com/hyperfollow/besomusic/sublime" },
    { title: "Choice", image: "images/music/choice.webp", link: "https://distrokid.com/hyperfollow/besomusic/choice" },
    { title: "Beso", image: "images/music/beso.webp", link: "https://distrokid.com/hyperfollow/besomusic/beso" },
    { title: "Scratch", image: "images/music/scratch.webp", link: "https://distrokid.com/hyperfollow/besomusic/scratch" },
    { title: "Squeaky Chair", image: "images/music/squeaky-chair.webp", link: "https://distrokid.com/hyperfollow/besomusic/squeaky-chair" },
    { title: "It's Your Clay", image: "images/music/its-your-clay.webp", link: "https://distrokid.com/hyperfollow/besomusic/its-your-clay" },
    { title: "Hard Target", image: "images/music/hard-target.webp", link: "https://distrokid.com/hyperfollow/besomusic/hard-target" },
    { title: "Jump", image: "images/music/jump.webp", link: "https://distrokid.com/hyperfollow/besomusic/jump" },
    { title: "I Told You So", image: "images/music/i-told-you-so.webp", link: "https://distrokid.com/hyperfollow/besomusic/i-told-you-so" },
    { title: "Why?", image: "images/music/why.webp", link: "https://distrokid.com/hyperfollow/besomusic/why" },
    { title: "Odds", image: "images/music/odds.webp", link: "https://distrokid.com/hyperfollow/besomusic/odds" },
    { title: "A Lovely Demon", image: "images/music/a-lovely-demon.webp", link: "https://distrokid.com/hyperfollow/besomusic/a-lovely-demon" },
    { title: "Sweet Nap", image: "images/music/sweet-nap.webp", link: "https://distrokid.com/hyperfollow/besomusic/sweet-nap" },
    { title: "Bastard", image: "images/music/bastard.webp", link: "https://distrokid.com/hyperfollow/besomusic/bastard" },
    { title: "Goat Hallucinations", image: "images/music/goat-hallucinations.webp", link: "https://distrokid.com/hyperfollow/besomusic/goat-hallucinations" },
    { title: "Stand Up", image: "images/music/stand-up.webp", link: "https://distrokid.com/hyperfollow/besomusic/stand-up" },
    { title: "First Kiss", image: "images/music/first-kiss.webp", link: "https://distrokid.com/hyperfollow/besomusic/first-kiss" },
    { title: "I Didn't Do It", image: "images/music/i-didnt-do-it.webp", link: "https://distrokid.com/hyperfollow/besomusic/i-didnt-do-it" },
    { title: "White Lie", image: "images/music/white-lie.webp", link: "https://distrokid.com/hyperfollow/besomusic/white-lie" },
    { title: "Chase", image: "images/music/chase.webp", link: "https://distrokid.com/hyperfollow/besomusic/chase" },
    { title: "Backwords Cap", image: "images/music/backwords-cap.webp", link: "https://distrokid.com/hyperfollow/besomusic/backwords-cap" },
    { title: "Void", image: "images/music/void.webp", link: "https://distrokid.com/hyperfollow/besomusic/void" },
    { title: "Shenanigans", image: "images/music/shenanigans.webp", link: "https://distrokid.com/hyperfollow/besomusic/shenanigans" },
    { title: "Pilonidal Cyst", image: "images/music/pilonidal-cyst.webp", link: "https://distrokid.com/hyperfollow/besomusic/pilonidal-cyst" },
    { title: "Umbrella", image: "images/music/umbrella.webp", link: "https://distrokid.com/hyperfollow/besomusic/umbrella" },
    { title: "Monday", image: "images/music/monday.webp", link: "https://distrokid.com/hyperfollow/besomusic/monday" },
    { title: "Fly", image: "images/music/fly.webp", link: "https://distrokid.com/hyperfollow/besomusic/fly" },
    { title: "Joy", image: "images/music/joy.webp", link: "https://distrokid.com/hyperfollow/besomusic/joy" },
    { title: "It's Been A Pleasure", image: "images/music/its-been-a-pleasure.webp", link: "https://distrokid.com/hyperfollow/besomusic/its-been-a-pleasure" },
    { title: "Pinky Swear", image: "images/music/pinky-swear.webp", link: "https://distrokid.com/hyperfollow/besomusic/pinky-swear" },
    { title: "Punch Back", image: "images/music/punch-back.webp", link: "https://distrokid.com/hyperfollow/besomusic/punch-back" },
    { title: "Unleash", image: "images/music/unleash.webp", link: "https://distrokid.com/hyperfollow/besomusic/unleash" },
    { title: "Sniffing The Clouds", image: "images/music/sniffing-the-clouds.webp", link: "https://distrokid.com/hyperfollow/besomusic/sniffing-the-clouds" },
    { title: "Freedom", image: "images/music/freedom.webp", link: "https://distrokid.com/hyperfollow/besomusic/freedom" },
    { title: "Mandala", image: "images/music/mandala.webp", link: "https://distrokid.com/hyperfollow/besomusic/mandala" },
    { title: "Fine", image: "images/music/fine.webp", link: "https://distrokid.com/hyperfollow/besomusic/fine" },
    { title: "Dream", image: "images/music/dream.webp", link: "https://distrokid.com/hyperfollow/besomusic/dream" },
    { title: "Fiesta", image: "images/music/fiesta.webp", link: "https://distrokid.com/hyperfollow/besomusic/fiesta" },
    { title: "Ticking", image: "images/music/ticking.webp", link: "https://distrokid.com/hyperfollow/besomusic/ticking" },
    { title: "A.M", image: "images/music/am.webp", link: "https://distrokid.com/hyperfollow/besomusic/am" },
    { title: "Gelato", image: "images/music/gelato.webp", link: "https://distrokid.com/hyperfollow/besomusic/gelato" },
    { title: "Funky Haircut", image: "images/music/funky-haircut.webp", link: "https://distrokid.com/hyperfollow/besomusic/funky-haircut" },
    { title: "On The Sly", image: "images/music/on-the-sly.webp", link: "https://distrokid.com/hyperfollow/besomusic/on-the-sly" },
    { title: "Dash", image: "images/music/dash.webp", link: "https://distrokid.com/hyperfollow/besomusic/dash" },
    { title: "Cool Villain", image: "images/music/cool-villain.webp", link: "https://distrokid.com/hyperfollow/besomusic/cool-villain" },
    { title: "Fearless Surfer", image: "images/music/fearless-surfer.webp", link: "https://distrokid.com/hyperfollow/besomusic/fearless-surfer" },
    { title: "Freska", image: "images/music/freska.webp", link: "https://distrokid.com/hyperfollow/besomusic/freska" },
    { title: "Fisherman", image: "images/music/fisherman.webp", link: "https://distrokid.com/hyperfollow/besomusic/fisherman" },
    { title: "Desert Party", image: "images/music/desert-party.webp", link: "https://distrokid.com/hyperfollow/besomusic/desert-party" },
    { title: "Exorcism", image: "images/music/exorcism.webp", link: "https://distrokid.com/hyperfollow/besomusic/exorcism" },
    { title: "Late Night Coffee", image: "images/music/late-night-coffee.webp", link: "https://distrokid.com/hyperfollow/besomusic/late-night-coffee" },
    { title: "Underwater Dance", image: "images/music/underwater-dance.webp", link: "https://distrokid.com/hyperfollow/besomusic/underwater-dance" },
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
