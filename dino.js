import { incrementCustomProperty, getCustomProperty } from "./updateCustomProperty";

const dinoElement = document.querySelector('[data-dino]');
const JUMP_SPEED = .45;
const GRAVITY = 0.0015;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;

let isJumping;
let dinoFrame;
let currentFrameTime;

export function setupDino() {
    isJumping = false;
    dinoFrame = 0;
    currentFrameTime = 0;
}

export function updateDino(delta, speedScale) {
    handleRun(delta, speedScale);
    handleJump(delta);
}

function handleRun(delta, speedScale) {
    if (isJumping) {
        dinoElement.src = `images/dino-stationary.png`;
        return
    }
    if (currentFrameTime >= FRAME_TIME) {
        dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT;
        dinoElement.src = `images/dino-run-${dinoFrame}.png`
        currentFrameTime -= FRAME_TIME
    }
    currentFrameTime += delta * speedScale;
}

function handleJump() {
    if (!isJumping) return

    incrementCustomProperty(dinoElement, '--bottom', yVelocity * delta)

    if (getCustomProperty(dinoElement, '--bottom') <= 0) {
        setCustomProperty(dinoElement, '--bottom', 0)
        isJumping = false;
    }
    yVelocity -= GRAVITY * delta
}