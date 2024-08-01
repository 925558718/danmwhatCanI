export function getRandomWith(min: number, max: number) {
    return min + Math.floor(random() * (max - min));
}