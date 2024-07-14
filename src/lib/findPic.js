function findPic(pic, threshold = 0.6, x, y, height, width) {
    const phoneImg = captureScreen();
    const pk = images.read(`./assets/${pic}.png`);
    sleep(1000);
    var p = findImage(phoneImg, pk, {
        threshold: 0.6,
        region: [x, y, width, height],
    });
    console.log(p);
    sleep(1000);
    //files.remove(path)
    return p;
}

export { findPic };

//bounds(18, 156, 135, 216)
