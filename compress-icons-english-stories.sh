#!/usr/bin/env bash
# =========================================================
# English Stories: download covers from Weebly + convert to .webp
# Run ONCE from the repo root, then delete this file.
#   bash compress-icons-english-stories.sh
# Output: images/novels-en/*.webp  (quality 80, max width 308px)
# =========================================================

set -e

OUT="images/novels-en"
mkdir -p "$OUT"

# Pick a converter: cwebp (preferred) or ImageMagick
if command -v cwebp >/dev/null 2>&1; then
    CONV="cwebp"
elif command -v magick >/dev/null 2>&1; then
    CONV="magick"
elif command -v convert >/dev/null 2>&1; then
    CONV="convert"
else
    echo "ERROR: need cwebp or ImageMagick installed."
    exit 1
fi
echo "Using: $CONV"

# name  |  Weebly source URL
download_and_convert () {
    local name="$1"
    local url="$2"
    local webp="$OUT/$name.webp"

    if [ -f "$webp" ]; then
        echo "skip (exists): $webp"
        return
    fi

    local tmp
    tmp="$(mktemp).jpg"
    echo "downloading: $name"
    curl -fsSL -o "$tmp" "$url"

    echo "converting:  $webp"
    if [ "$CONV" = "cwebp" ]; then
        cwebp -q 80 -resize 308 0 "$tmp" -o "$webp" >/dev/null 2>&1
    elif [ "$CONV" = "magick" ]; then
        magick "$tmp" -resize '308x>' -quality 80 "$webp"
    else
        convert "$tmp" -resize '308x>' -quality 80 "$webp"
    fi

    rm -f "$tmp"
}

download_and_convert "azeneth"   "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/7069456.jpg"
download_and_convert "fartastic" "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/6939250.jpg"

echo "Done. Files in $OUT/"
