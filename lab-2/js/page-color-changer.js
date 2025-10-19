window.addEventListener('DOMContentLoaded', () => {

    // Declare constants for sliders and html elements
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const htmlElement = document.querySelector('html');
    
    //function created to update background colors
     function updateBackgroundColor() {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;

        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        htmlElement.style.backgroundColor = rgbColor;

        console.log(`Background color changed to: ${rgbColor}`);
    }