#!/usr/bin/env bash
#
# compress-music-icons.sh
#
# Downloads Beso Music cover art from the old Weebly site,
# converts them to optimized .webp, renames them by slug, and drops them into:
#     images/music/
#
# HOW TO RUN:
#   1. Put this file in your project root (next to index.html)
#   2. Open a terminal in that folder
#   3. Run:  bash compress-music-icons.sh
#
# REQUIREMENTS (one of these):
#   - cwebp        (install: https://developers.google.com/speed/webp/download)
#   - ImageMagick  (the "magick" or "convert" command)
# ---------------------------------------------------------------------------

set -e

MUSIC_DIR="images/music"
TMP_DIR=".icon-tmp"
mkdir -p "$MUSIC_DIR" "$TMP_DIR"

# --- Pick a converter -------------------------------------------------------
if command -v cwebp >/dev/null 2>&1; then
    CONV="cwebp"
elif command -v magick >/dev/null 2>&1; then
    CONV="magick"
elif command -v convert >/dev/null 2>&1; then
    CONV="convert"
else
    echo "ERROR: Need cwebp or ImageMagick installed. Neither found."
    echo "  - cwebp:       https://developers.google.com/speed/webp/download"
    echo "  - ImageMagick: https://imagemagick.org/script/download.php"
    exit 1
fi
echo "Using converter: $CONV"

# convert_image  <source_url>  <output_path>  <max_width>
convert_image () {
    local url="$1"; local out="$2"; local maxw="$3"
    local raw="$TMP_DIR/$(basename "$out").download"
    echo "  downloading $(basename "$out")"
    curl -sL -A "Mozilla/5.0" "$url" -o "$raw"
    if [ "$CONV" = "cwebp" ]; then
        cwebp -quiet -q 80 -resize "$maxw" 0 "$raw" -o "$out"
    else
        $CONV "$raw" -resize "${maxw}x>" -quality 80 "$out"
    fi
}

# --- MUSIC COVERS (max width 308) -------------------------------------------
echo "Music covers:"
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/the-kid.jpg?1776091635" "$MUSIC_DIR/the-kid.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/your-lane_1.jpg" "$MUSIC_DIR/your-lane.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/wake-up_1.jpg" "$MUSIC_DIR/wake-up.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/don-t-stop_1.jpg" "$MUSIC_DIR/dont-stop.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/nonsense_1.jpg" "$MUSIC_DIR/nonsense.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/soap_1.jpg" "$MUSIC_DIR/soap.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/sublime_1.jpg" "$MUSIC_DIR/sublime.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/choice_1.jpg" "$MUSIC_DIR/choice.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/beso_1.jpg" "$MUSIC_DIR/beso.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/scratch_1.jpg" "$MUSIC_DIR/scratch.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/squeaky-chair_1.jpg" "$MUSIC_DIR/squeaky-chair.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/it-s-your-clay.jpg?1755399426" "$MUSIC_DIR/its-your-clay.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/hard-target_1.jpg" "$MUSIC_DIR/hard-target.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/jump_1.jpg" "$MUSIC_DIR/jump.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/i-told-you-so_1.jpg" "$MUSIC_DIR/i-told-you-so.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/beso-music-44-why_1.jpg" "$MUSIC_DIR/why.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/odds.jpg?1745753547" "$MUSIC_DIR/odds.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/a-lovely-demon.jpg?1711106829" "$MUSIC_DIR/a-lovely-demon.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/sweet-nap_1.jpg" "$MUSIC_DIR/sweet-nap.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/bastard-project_1.jpg" "$MUSIC_DIR/bastard.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/goat-hallucinations_1.jpg" "$MUSIC_DIR/goat-hallucinations.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/stand-up_1.jpg" "$MUSIC_DIR/stand-up.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/first-kiss_1.jpg" "$MUSIC_DIR/first-kiss.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/i-didn-t-do-it_1.jpg" "$MUSIC_DIR/i-didnt-do-it.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/white-lie_1.jpg" "$MUSIC_DIR/white-lie.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/chase_1.jpg" "$MUSIC_DIR/chase.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/backwords-cap_1.jpg" "$MUSIC_DIR/backwords-cap.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/void_1.jpg" "$MUSIC_DIR/void.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/shenanigans_1.jpg" "$MUSIC_DIR/shenanigans.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/pilonidal-cyst_1.jpg" "$MUSIC_DIR/pilonidal-cyst.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/umbrella_1.jpg" "$MUSIC_DIR/umbrella.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/monday_1.jpg" "$MUSIC_DIR/monday.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/fly_1.jpg" "$MUSIC_DIR/fly.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/joy_1.jpg" "$MUSIC_DIR/joy.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/it-s-been-a-pleasure_1.jpg" "$MUSIC_DIR/its-been-a-pleasure.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/pinky-swear_1.jpg" "$MUSIC_DIR/pinky-swear.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/punch-back_1.jpg" "$MUSIC_DIR/punch-back.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/unleash_1.jpg" "$MUSIC_DIR/unleash.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/sniffing-the-clouds_1.jpg" "$MUSIC_DIR/sniffing-the-clouds.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/freedom.jpg?1600267194" "$MUSIC_DIR/freedom.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/mandala-track_1.jpg" "$MUSIC_DIR/mandala.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/fine.jpg?1599920631" "$MUSIC_DIR/fine.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/dream_1.jpg?1599920616" "$MUSIC_DIR/dream.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/fiesta_orig.jpg" "$MUSIC_DIR/fiesta.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/ticking_1.jpg" "$MUSIC_DIR/ticking.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/a-m_2.jpg?1599935966" "$MUSIC_DIR/am.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/gelato.jpg?1599937357" "$MUSIC_DIR/gelato.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/funky-haircut.jpg?1600011508" "$MUSIC_DIR/funky-haircut.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/on-the-sly.jpg?1600008608" "$MUSIC_DIR/on-the-sly.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/dash_1.jpg?1600100052" "$MUSIC_DIR/dash.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/cool-villain.jpg?1600101032" "$MUSIC_DIR/cool-villain.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/fearless-surfer_1.jpg?1600179938" "$MUSIC_DIR/fearless-surfer.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/freska_1.jpg?1600180200" "$MUSIC_DIR/freska.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/fisherman_1.jpg?1600180441" "$MUSIC_DIR/fisherman.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/desert-party_1.jpg?1600180938" "$MUSIC_DIR/desert-party.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/exorcism_1.jpg?1600181673" "$MUSIC_DIR/exorcism.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/late-night-coffee_1.jpg?1600184327" "$MUSIC_DIR/late-night-coffee.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/underwater-dance_1.jpg?1600185028" "$MUSIC_DIR/underwater-dance.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/spunky-donkey-icons_1.jpg?1600185379" "$MUSIC_DIR/spunky-donkey.webp" 308

# --- Cleanup ----------------------------------------------------------------
rm -rf "$TMP_DIR"

echo ""
echo "Done."
echo "Music: $MUSIC_DIR"
ls -la "$MUSIC_DIR"
