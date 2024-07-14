
let picCount = 0;
function findPic(pic, threshold = 0.6) {
    const path = `./${picCount}.png`
    picCount++;
    const phoneImg = capture(path)
    const pk = images.read(`./assets/${pic}.png`)
    sleep(1000)
    var p = findImage(phoneImg, pk, {
        threshold/*  */
    })
    sleep(1000)
    files.remove(path)
    return p;
}

function capture(path) {
    while (1) {
        captureScreen(path)
        sleep(2000)
        const img = images.read(path)
        if (img) return img
    }
}

export { findPic }