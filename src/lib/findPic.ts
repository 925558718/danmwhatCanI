function findPic(pic: string, threshold = 0.6, region?: OmniRegion) {
    const phoneImg = captureScreen();
    const pk = images.read(`./assets/${pic}.png`);
    const clip = images.clip(phoneImg, region);
    sleep(1000);

    var p = findImage(clip, pk, {
        threshold:0.2,
        region,
    });
    sleep(1000);
    //files.remove(path)
    return p;
}

export { findPic };

//bounds(18, 156, 135, 216)
