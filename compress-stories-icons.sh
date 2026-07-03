#!/usr/bin/env bash
#
# compress-stories-icons.sh
#
# Downloads Arabic book covers + store logos from the old Weebly site,
# converts them to optimized .webp, renames them, and drops them into:
#     images/novels/   (book covers, max width 308)
#     images/stores/   (store logos, max width 200)
#
# HOW TO RUN:
#   1. Put this file in your project root (next to index.html)
#   2. Open a terminal in that folder
#   3. Run:  bash compress-stories-icons.sh
#   4. Delete this file when done.
#
# REQUIREMENTS (one of these):
#   - cwebp        (install: https://developers.google.com/speed/webp/download)
#   - ImageMagick  (the "magick" or "convert" command)
# ---------------------------------------------------------------------------

set -e

NOVELS_DIR="images/novels"
STORES_DIR="images/stores"
TMP_DIR=".icon-tmp"
mkdir -p "$NOVELS_DIR" "$STORES_DIR" "$TMP_DIR"

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
    if [ -f "$out" ]; then
        echo "  skipping (exists) $(basename "$out")"
        return
    fi
    local raw="$TMP_DIR/$(basename "$out").download"
    echo "  downloading $(basename "$out")"
    curl -sL -A "Mozilla/5.0" "$url" -o "$raw"
    if [ "$CONV" = "cwebp" ]; then
        cwebp -quiet -q 80 -resize "$maxw" 0 "$raw" -o "$out"
    else
        $CONV "$raw" -resize "${maxw}x>" -quality 80 "$out"
    fi
}

# --- BOOK COVERS (max width 308) --------------------------------------------
echo "Book covers:"
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/whatsapp-image-2025-12-21-at-3-17-16-pm.jpeg?1775992228" "$NOVELS_DIR/albat-albortoqali.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/cover-2_1.png" "$NOVELS_DIR/hasnous.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/204343879.jpg?1711117354" "$NOVELS_DIR/kanet-hatfor2.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/whatsapp-image-2021-12-13-at-3-40-42-am_1.jpeg?1711117366" "$NOVELS_DIR/el-yom-el-akheer.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/2047251434.jpg?1770366407" "$NOVELS_DIR/salet-sonia.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/521286679_1.jpg" "$NOVELS_DIR/eshq.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/525630293_1.jpg" "$NOVELS_DIR/layla-fi-hodn-abi.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/404974484_1.jpg" "$NOVELS_DIR/bella.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/574642387_1.jpg" "$NOVELS_DIR/sal2-beed.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/1409100403_1.jpg" "$NOVELS_DIR/zalam.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/1139889528_1.jpg" "$NOVELS_DIR/ela-azizi-mokhaimar.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/1061754828_1.jpg" "$NOVELS_DIR/shahd.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/911212883_1.jpg" "$NOVELS_DIR/samaka.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/amazon-cover-comfort-os_1.jpg" "$NOVELS_DIR/comfort-os.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/922839287_1.jpg" "$NOVELS_DIR/cinema-lolita.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/1845831283_1.jpg" "$NOVELS_DIR/el-dor-el-sades.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/1666455573_2.jpg" "$NOVELS_DIR/interview.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/amazon-cover-copy_1.jpg" "$NOVELS_DIR/asmahan-hanem.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/2012056402_2.jpg" "$NOVELS_DIR/khayal-helmy-2.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/english-cake-kotobna_1.jpg?1754131479" "$NOVELS_DIR/english-cake.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/homar-cover-kotonbna_1.jpg?1754129503" "$NOVELS_DIR/ad-homar.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/noor-cover-kotobna_1.jpg?1754141642" "$NOVELS_DIR/noor.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/2073404395_1.jpg" "$NOVELS_DIR/sarsar-man.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/mamhon-cover-kotobna_1.jpg" "$NOVELS_DIR/el-mamhoon.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/kotobna-cover_1.jpg" "$NOVELS_DIR/beed.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/operation-nasf_1.jpg" "$NOVELS_DIR/operation-nsf.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/ostora-cover_1.jpg?1607058358" "$NOVELS_DIR/ostora.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/kafer-cover-copy_2.jpg" "$NOVELS_DIR/kafer.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/yahia-amazon-cover.jpg?1754214281" "$NOVELS_DIR/yahia.webp" 308
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/b-miracle-amazon-cover.jpg?1754218315" "$NOVELS_DIR/b-miracle.webp" 308

# --- STORE LOGOS (max width 200) --------------------------------------------
echo "Store logos:"
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/logo-abjjad_1.png" "$STORES_DIR/abjjad.webp" 200
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/asser-el-kotob.png?1775992898" "$STORES_DIR/aseeralkotb.webp" 200
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/kotopia-logo2.jpg?1775993023" "$STORES_DIR/kotopia.webp" 200
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/download.png?1640344232" "$STORES_DIR/ireadhub.webp" 200
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/download_2.png" "$STORES_DIR/ireadhub-shop.webp" 200
convert_image "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/download-1.png?1640344246" "$STORES_DIR/alrewaq.webp" 200

# --- Cleanup ----------------------------------------------------------------
rm -rf "$TMP_DIR"

echo ""
echo "Done."
echo "Covers: $NOVELS_DIR"
echo "Stores: $STORES_DIR"
ls -la "$NOVELS_DIR"
ls -la "$STORES_DIR"
