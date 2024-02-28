// Gets css property and converts to number
export function getCustomProperty (element, property) {
    return parseFloat(getComputedStyle(element).getPropertyValue(property)) || 0;
}

// Gives css property a new value
export function setCustomProperty (element, property, value) {
    element.style.setProperty(property, value)
}

// Getting the current value, adding to it, and setting the value
export function incrementCustomProperty (element, property, increment) {
    setCustomProperty(element, property, getCustomProperty(element, property) + increment);
}