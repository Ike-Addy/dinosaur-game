const SPEED = 0.05;
const CACTUS_INTERVAL_MIN = 500;
const CACTUS_INTERVAL_MAX = 2000;
const worldElement = document.querySelector('[data-world]');

let nextCactusTime

export function setupCactus() {
    nextCactusTime = CACTUS_INTERVAL_MIN
}

export function updateCactus(delta, speedScale) {

    if (nextCactusTime <= 0) {
        createCactus()
        nextCactusTime = randomNumberBetween(CACTUS_INTERVAL_MIN,
        CACTUS_INTERVAL_MAX) / speedScale;
    }

    nextCactusTime -= delta
}