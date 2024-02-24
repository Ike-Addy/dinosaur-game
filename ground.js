import { 
    getCustomProperty, 
    incrementCustomProperty, 
    setCustomProperty 
} from "./updateCustomProperty.js";

const groundElements = document.querySelectorAll('[data-ground]');
const SPEED = .05;

export function setGround() {
    setCustomProperty(groundElements[0], '--left', 0);
    setCustomProperty(groundElements[1], '--left', 300);
}

export function updateGround(delta) {
    groundElements.forEach(ground => {
        incrementCustomProperty(ground, '--left', delta * SPEED * -1);

        if (getCustomProperty(ground, '--left') <= -300) {
            incrementCustomProperty(ground, '--left', 600);
        }
    })
}