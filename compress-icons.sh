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

# --- STORE LOGOS (max width 200, reused across all games) -------------------
echo "Store logos:"
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/meta-quest-seeklogo-white.png?1764092164" "$STORES_DIR/meta.webp" 200
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/715338_15.png" "$STORES_DIR/googleplay.webp" 200
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/badge-color.png?1688362316" "$STORES_DIR/itch.webp" 200

# --- Cleanup ----------------------------------------------------------------
rm -rf "$TMP_DIR"

echo ""
echo "Done."
echo "Games:  $GAMES_DIR"
ls -la "$GAMES_DIR"
echo "Stores: $STORES_DIR"
ls -la "$STORES_DIR"
