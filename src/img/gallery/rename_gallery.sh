#!/bin/bash
i=0
for f in ./*.jpg
do
    ((i = i + 1))
    echo "$i Processing $f image..."
    mv $f "img_$i.jpg"
done
exit 0
