const { execSync } = require('child_process')

// UNSHARP

/*
FilterName: unsharp 
Settings: 
    luma_msize_x, lx
        - Set the luma matrix horizontal size. It must be an odd integer
        between 3 and 23. The default value is 5.

    luma_msize_y, ly
        - Set the luma matrix vertical size. It must be an odd integer
        between 3 and 23. The default value is 5.

    lma_amount, la
        - Set the luma effect strength. It mus be a floating point number,
        reasonable values lay between -1.5 and 1.5.
        - Negative values will blur the input video, while positive values will
        sharpen it, a value of zero will disable the effect.

Example: ffmpeg -i input.jpg -filter "unsharp=lx=5:ly=5:la=1.0" output.jpg
*/

// Makes a blurry video/image clearer [Default]
execSync(`ffmpeg -y -i image.jpg -filter "unsharp" images/unsharps/image-unsharped-1.jpg`)

// Makes a blurry video/image clearer [NORMAL]
execSync(`ffmpeg -y -i image.jpg -filter "unsharp=lx=11:ly=11" images/unsharps/image-unsharped-2.jpg`)

// Makes a blurry video/image clearer [FULL]
execSync(`ffmpeg -y -i image.jpg -filter "unsharp=lx=11:ly=11" images/unsharps/image-unsharped-3.jpg`)

// Makes a blurry video/image clearer [Effect Intensivy Positivity]
execSync(`ffmpeg -y -i image.jpg -filter "unsharp=lx=11:ly=11:la=1.5" images/unsharps/image-unsharped-4.jpg`)

// Makes a blurry video/image clearer [Effect Intensivy Negativity]
execSync(`ffmpeg -y -i image.jpg -filter "unsharp=lx=11:ly=11:la=-1.5" images/unsharps/image-unsharped-5.jpg`)