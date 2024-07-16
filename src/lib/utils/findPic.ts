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

function findObjectsThen(selectors: Internal.Selector[], doIt: (one: UiObject) => void): boolean {
    for (let i = 0; i < selectors.length; i++) {
        if (selectors[i].exists()) {
            doIt(pickup(selectors[i]));
            return true;
        }
    }
    return false;
}

function findThen(selectors: Internal.Selector, doIt: (one: UiObject) => void): boolean {
    let res = selectors.exists();
    if (res) {
        doIt(pickup(selectors));
        return true;
    }
    return res;
}

function findSwitchThen(selectors: { selector: Internal.Selector; doIt: (one: UiObject) => void }[]) {
    for (let i = 0; i < selectors.length; i++) {
        if (selectors[i].selector.exists()) {
            return selectors[i].doIt(pickup(selectors[i].selector));
        }
    }
}
type nextCallbackType = () => void;
function doListBuilder(timeWait: number) {
    let arr: nextCallbackType[] = [];
    let valid = true;
    let exec = function () {
        for (let i = 0; i < arr.length; i++) {
            arr[i]();
        }
    };
    function next(doIt: (UiObject?: UiObject) => void, selector?: Internal.Selector) {
        if (selector && !selector.exists()) {
            valid = false;
        } else {
            if (valid) {
                arr.push(() => {
                    selector ? doIt(pickup(selector)) : doIt();
                    sleep(timeWait);
                });
            }
        }
        return { next, exec };
    }
    return { next, exec };
}

export { findPic, findThen, findObjectsThen, findSwitchThen, doListBuilder };

//bounds(18, 156, 135, 216)
