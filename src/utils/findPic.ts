type SelectorOrUndefined<T> = T extends undefined ? null : UiObject;
type nextCallbackType = () => void;

function findPic(pic: string, region?: OmniRegion) {
    const screen = captureScreen();
    const img = images.read(`./assets/${pic}.png`);
    const poses = [];
    for (let i = 0; i < 10; i++) {
        const color = images.pixel(img, Math.floor(Math.random() * img.width), Math.floor(Math.random() * img.height));
        const p = images.findColor(screen, color, {
            threshold: 10,
            region,
        });
        if (p) poses.push(p);
    }

    if (poses.length >= 5) {
        let { x, y } = poses[0];
        for (let i = 1; i < poses.length; i++) {
            x = (poses[i].x + x) / 2;
            y = (poses[i].y + y) / 2;
        }
        return { x, y };
    }

    return null;
}

function findObjectsThen(selectors: Internal.Selector[], doIt: (one: UiObject) => void): boolean {
    for (const selector of selectors) {
        if (selector.exists()) {
            doIt(pickup(selector));
            return true;
        }
    }
    return false;
}

function findThen(selector: Internal.Selector, doIt: (one: UiObject) => void): boolean {
    const res = selector.exists();
    if (res) {
        doIt(pickup(selector));
    }
    return res;
}

function findSwitchThen(selectors: { selector: Internal.Selector; doIt: (one: UiObject) => void }[]) {
    for (const { selector, doIt } of selectors) {
        if (selector.exists()) {
            doIt(pickup(selector));
            return true;
        }
    }
    return false;
}

function doListBuilder(timeWait: number) {
    const arr: nextCallbackType[] = [];
    function exec() {
        for (const fn of arr) {
            fn();
        }
    }

    function next<T extends string>(
        doIt: (uiObject: SelectorOrUndefined<T>) => void,
        selectors?: T[],
    ) {
        let selector = null;
        let isExist = false
        if (selectors) {
            for (let sel of selectors) {
                if (textContains(sel || 'null')?.exists()) {
                    selector = textContains(sel)
                    isExist = true
                }
            }
        }
        if(selectors && selector) {
            arr.push(()=>{
                doIt(pickup(selector) as SelectorOrUndefined<T>);
                sleep(timeWait)
            })
        }
        if(!selectors) {
            arr.push(()=>{
                doIt(null as SelectorOrUndefined<T>);
                sleep(timeWait)
            })
        }

        return { next, exec };
    }

    return { next, exec };
}

export { findPic, findThen, findObjectsThen, findSwitchThen, doListBuilder };