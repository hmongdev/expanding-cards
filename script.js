// storing all the panel elements in array: panels
const panels = document.querySelectorAll('.panel');

// forEach = higher-order method that accepts functions as arguments
// purpose: add eventListener to each panel that expands when clicked
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        console.log(123);
    })
});