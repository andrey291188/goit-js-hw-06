function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonGenerationColor = document.querySelector(".change-color")
const colorNumberPublish = document.querySelector(".color")
buttonGenerationColor.addEventListener("click", changeColor)


function changeColor (event) {

  colorNumberPublish.textContent = getRandomHexColor();
  document.querySelector('body').style.background = getRandomHexColor();

}

