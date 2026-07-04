#!/bin/bash
# compress-icons-awards.sh
# Grab + convert Awards images to webp, then delete this file.
# Run from your repo root. Needs cwebp (or use full path C:\webp\bin\cwebp.exe)

mkdir -p images/awards

# iRead Awards 2022
curl -L -o a1.jpg "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/img-20221128-153842_orig.jpg"
cwebp -q 80 -resize 700 0 a1.jpg -o images/awards/2022-1.webp

curl -L -o a2.jpg "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/img-20221128-153532_1.jpg"
cwebp -q 80 -resize 700 0 a2.jpg -o images/awards/2022-2.webp

# iRead Awards 2021
curl -L -o a3.jpg "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/dsc-2136_1.jpg"
cwebp -q 80 -resize 700 0 a3.jpg -o images/awards/2021-1.webp

curl -L -o a4.jpg "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/dsc-2140_orig.jpg"
cwebp -q 80 -resize 700 0 a4.jpg -o images/awards/2021-2.webp

curl -L -o a5.jpg "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/dsc-2141_orig.jpg"
cwebp -q 80 -resize 700 0 a5.jpg -o images/awards/2021-3.webp

curl -L -o a6.jpg "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/dsc-2144_orig.jpg"
cwebp -q 80 -resize 700 0 a6.jpg -o images/awards/2021-4.webp

curl -L -o a7.jpg "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/img-20211124-164842_orig.jpg"
cwebp -q 80 -resize 700 0 a7.jpg -o images/awards/2021-5.webp

curl -L -o a8.jpg "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/img-20211124-165156_orig.jpg"
cwebp -q 80 -resize 700 0 a8.jpg -o images/awards/2021-6.webp

# clean up temp files
rm a1.jpg a2.jpg a3.jpg a4.jpg a5.jpg a6.jpg a7.jpg a8.jpg
