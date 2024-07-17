import { getRandomWith } from "./math";

export function nextPage() {
    let swipeX = getRandomWith(device.width / 2 - 50, device.width / 2 + 50);
    let startY = getRandomWith(device.height - 10, device.height);
    let endY = getRandomWith(0, 10);
    let duration = getRandomWith(100, 200);
    swipe(swipeX, startY, swipeX, endY, duration);
}
