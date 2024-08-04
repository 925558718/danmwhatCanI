import { getRandomWith } from "./math";

export function nextPage() {
    sleep(500);
    let swipeX = getRandomWith(device.width / 2 - 50, device.width / 2 + 50);
    let startY = getRandomWith(device.height / 2 + 20, device.height / 2 + 50);
    let endY = getRandomWith(0, 10);
    let duration = getRandomWith(100, 200);
    swipe(swipeX, startY, swipeX, endY, duration);
    sleep(500);
}


export function randomClick(x:number,y:number) {
    sleep(100);
    let clickx = getRandomWith(x-10,x+10);
    let clicky = getRandomWith(y-10,y+10);
    click(clickx, clicky);
    sleep(100);
}