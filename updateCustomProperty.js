export function getCustomProperty (element, property) {
    return parseFloat(getComputedStyle(element).getPropertyValue(property)) || 0;
}

export function setCustomProperty () {

}

export function incrementCustomProperty () {

}