import { setupGround, updateGround } from './ground.js';

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;
const SPEED_SCALE_INCREASE = .00001;

const worldElement = document.querySelector('[data-world]');

setPixelToWorldScale()
window.addEventListener('resize', setPixelToWorldScale);
document.addEventListener('keydown', handleStart, { once: true });

setupGround();

let lastTime;
let speedScale;

function update(time) {
    if (lastTime == null) {
        lastTime = time;
        window.requestAnimationFrame(update);
        return
    }
    const delta = time - lastTime;
    updateGround(delta, speedScale);
    updateSpeedScale(delta);
    // console.log(delta);
    lastTime = time;
    window.requestAnimationFrame(update);

}

function updateSpeedScale(delta) {
    speedScale += delta * SPEED_SCALE_INCREASE;
}

function handleStart() {
    lastTime = null;
    speedScale = 1;
    setupGround();
    window.requestAnimationFrame(update);
}

function setPixelToWorldScale() {
    let worldToPixelScale
    if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
        worldToPixelScale = window.innerWidth / WORLD_WIDTH;
    } else {
        worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
    }

    worldElement.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
    worldElement.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
}