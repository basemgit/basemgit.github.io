#!/bin/bash
# compress-icons-experience-mecca.sh
# Grab + convert Experience Mecca images to webp, then delete this file.
# Run from your repo root. Needs cwebp (or use full path C:\webp\bin\cwebp.exe)

mkdir -p images/experience-mecca

# hero screenshot (top big image)
curl -L -o hero.jpg "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/523008.jpg"
cwebp -q 80 hero.jpg -o images/experience-mecca/hero.webp

# VR Shop logo
curl -L -o vrshop.jpg "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/editor/vr-shop-logo_3.jpg"
cwebp -q 80 vrshop.jpg -o images/experience-mecca/vr-shop.webp

# Quartz logo
curl -L -o quartz.jpg "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/published/352219747-1278266112791996-5559428636891305654-n.jpg"
cwebp -q 80 quartz.jpg -o images/experience-mecca/quartz.webp

# closing image (big, at bottom)
curl -L -o closing.jpg "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/2621062_orig.jpg"
cwebp -q 80 closing.jpg -o images/experience-mecca/closing.webp

# clean up temp jpgs
rm hero.jpg vrshop.jpg quartz.jpg closing.jpg
