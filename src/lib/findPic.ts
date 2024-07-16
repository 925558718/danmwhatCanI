function findPic(pic: string, region?: OmniRegion) {
    const screen = captureScreen();
    const img = images.read(`./assets/${pic}.png`);
    const poses = [];
    for (let i = 0; i < 10; i++) {
        const color = images.pixel(img, Math.floor(random() * img.width), Math.floor(random() * img.height));
        const p = images.findColor(screen, color, {
            threshold: 10,
            region,
        });
        p && poses.push(p);
    }

    if (poses.length >= 5) {
        let x = poses[0].x;
        let y = poses[0].y;
        if (poses.length > 1) {
            for (let i = 0; i++; i < poses.length) {
                x = (poses[i].x + x) / 2;
                y = (poses[i].y + y) / 2;
            }
        }
        return {
            x,
            y,
        };
    }

    return null;
}

export { findPic };

//bounds(18, 156, 135, 216)
