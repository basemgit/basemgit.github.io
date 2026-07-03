#!/bin/bash
# compress-icons-dance.sh
# Grab + convert Dance images to webp, then delete this file.
# Run from your repo root. Needs cwebp (or use full path C:\webp\bin\cwebp.exe)

mkdir -p images/dance

# dance photo (first image)
curl -L -o dance1.jpg "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/14a1617_orig.jpg"
cwebp -q 80 -resize 700 0 dance1.jpg -o images/dance/dance-1.webp

# stage image (second image, was a PNG on Weebly)
curl -L -o stage.png "https://basemibrahim.weebly.com/uploads/4/9/8/8/49884657/stage-lower-size_orig.png"
cwebp -q 80 -resize 700 0 stage.png -o images/dance/stage.webp

# clean up temp files
rm dance1.jpg stage.png
