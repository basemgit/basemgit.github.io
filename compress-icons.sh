#!/usr/bin/env bash
#
# compress-icons.sh  (TEST VERSION — Smash icon + store logos)
#
# Downloads game icons + store badge logos from the old Weebly site,
# converts them to optimized .webp, renames them, and drops them into:
#     images/games/    (game icons)
#     images/stores/   (store badge logos, reused across all games)
#
# HOW TO RUN:
#   1. Put this file in your project root (next to index.html)
#   2. Open a terminal in that folder
#   3. Run:  bash compress-icons.sh
#
# REQUIREMENTS (one of these):
#   - cwebp        (install: https://developers.google.com/speed/webp/download)
#   - ImageMagick  (the "magick" or "convert" command)
#
# ---------------------------------------------------------------------------

set -e

GAMES_DIR="images/games"
STORES_DIR="images/stores"
TMP_DIR=".icon-tmp"
mkdir -p "$GAMES_DIR" "$STORES_DIR" "$TMP_DIR"

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

# --- GAME ICONS (max width 256) ---------------------------------------------
echo "Game icons:"
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/smash-icon.png?1764092482" "$GAMES_DIR/smash.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/icon_3.jpg" "$GAMES_DIR/puppy.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/icon_6.png" "$GAMES_DIR/balls.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/icon_2.jpg" "$GAMES_DIR/the-battle.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/icon_5.png" "$GAMES_DIR/bananas.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/cover.png?1688372482" "$GAMES_DIR/kick-and-chop.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/cover_1.png" "$GAMES_DIR/frenzy.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/icon-edit_1.png" "$GAMES_DIR/hell.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/icon_4.png" "$GAMES_DIR/rescue.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/icon_1.jpg" "$GAMES_DIR/boxes.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/icon_3.png" "$GAMES_DIR/hamada.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/icon_2.png" "$GAMES_DIR/shoot.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/icon_1.png" "$GAMES_DIR/squares.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/ic-website_1.png" "$GAMES_DIR/the-black-balloon.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/icon-white-background_1.jpg" "$GAMES_DIR/circles.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/store-icon_1.jpg" "$GAMES_DIR/donkey-football.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/icon2_1.png" "$GAMES_DIR/wait-and-hit.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/2511327.jpg" "$GAMES_DIR/azeneth.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/4305847.png" "$GAMES_DIR/fartastic.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/8320263_4.png?1599833819" "$GAMES_DIR/whistle-to-fart.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/4376125.png?97" "$GAMES_DIR/colorful.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/6171530.png?133" "$GAMES_DIR/bat-ball.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/6773979.png?105" "$GAMES_DIR/shutm-up.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/4274299.png?127" "$GAMES_DIR/space-word-picker.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/7068771.jpg?131" "$GAMES_DIR/city-driver.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/8041151.png?100" "$GAMES_DIR/10-seconds-racing.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/5450873.png" "$GAMES_DIR/kooky.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/4005627.png?64" "$GAMES_DIR/guess-what.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/7430788.png?114" "$GAMES_DIR/hungry-bee.webp" 256
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/530881.jpg?113" "$GAMES_DIR/dolphin-vs-ball.webp" 256

# --- STORE LOGOS (max width 200, reused across all games) -------------------
# NOTE: meta.webp is added manually (black version) — not downloaded here.
echo "Store logos:"
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/715338_15.png" "$STORES_DIR/googleplay.webp" 200
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/badge-color.png?1688362316" "$STORES_DIR/itch.webp" 200
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/2459432.gif?91" "$STORES_DIR/kongregate.webp" 200

# --- Cleanup ----------------------------------------------------------------
rm -rf "$TMP_DIR"

echo ""
echo "Done."
echo "Games:  $GAMES_DIR"
ls -la "$GAMES_DIR"
echo "Stores: $STORES_DIR"
ls -la "$STORES_DIR"
