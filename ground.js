import { incrementCustomProperty } from "./updateCustomProperty.js";

const groundElements = document.querySelectorAll('[data-ground]');

const SPEED = .05;
export function updateGround(delta) {
    groundElements.forEach(ground => {
        incrementCustomProperty(ground, '--left', delta * SPEED * -1);
    })
}