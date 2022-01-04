const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");
const colorValue = document.querySelector("#color-value");

function handleInputEvent(e){
    console.log(e.target.value);
}






redSlider.addEventListener("input", handleInputEvent);
greenSlider.addEventListener("input", handleInputEvent);
blueSlider.addEventListener("input", handleInputEvent);
   
