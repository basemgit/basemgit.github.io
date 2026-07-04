#!/usr/bin/env bash
# =========================================================
# Apps: download icons from Weebly + convert to .webp
# Run ONCE from the repo root, then delete this file.
#   bash compress-icons-apps.sh
# Output: images/apps/*.webp  (quality 80, max width 160px)
# Store badge (Google Play) already exists in images/stores/ - not touched.
# =========================================================

set -e

OUT="images/apps"
mkdir -p "$OUT"

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

download_and_convert () {
    local name="$1"
    local url="$2"
    local webp="$OUT/$name.webp"

    if [ -f "$webp" ]; then
        echo "skip (exists): $webp"
        return
    fi

    local tmp
    tmp="$(mktemp)"
    echo "downloading: $name"
    curl -fsSL -o "$tmp" "$url"

    echo "converting:  $webp"
    if [ "$CONV" = "cwebp" ]; then
        cwebp -q 80 -resize 160 0 "$tmp" -o "$webp" >/dev/null 2>&1
    elif [ "$CONV" = "magick" ]; then
        magick "$tmp" -resize '160x>' -quality 80 "$webp"
    else
        convert "$tmp" -resize '160x>' -quality 80 "$webp"
    fi

    rm -f "$tmp"
}

download_and_convert "seena-pay"         "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/seena.webp?1657333581"
download_and_convert "handy-delivery"    "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/handy-delivery_1.jpg"
download_and_convert "zvendo"            "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/zvendo_1.webp"
download_and_convert "swiss-trail"       "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/swiss-trail-icon.jpg?1599791279"
download_and_convert "purple-bureau"     "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/purple-icon.jpg?1599833193"
download_and_convert "my-street-weather" "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/splash.jpg?1599833360"
download_and_convert "naos"              "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/naos-icon_1.jpg?1599834163"
download_and_convert "juhayna"           "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/juhayna.jpg?1599834232"
download_and_convert "monsbaty"          "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/monsbaty.jpg?1599834761"
download_and_convert "al-nahyan"         "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/al-nahyan-icon.png?1599834821"
download_and_convert "misr-pharmacies"   "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/misr-pharmacies-icon.jpg?1599835286"
download_and_convert "heinz-selfie"      "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/heinz-selfie-icon.png?1599835373"

echo "Done. Files in $OUT/"
