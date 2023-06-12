function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxApped = document.querySelector("#boxes")

btnCreate.addEventListener("click", getAmount)
btnDestroy.addEventListener("click", destroyBoxes)

function getAmount() {
  const inputNumber = document.querySelector("#controls input").value;
  createBoxes(inputNumber);
}

function createBoxes(amount) {
  const baseSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const size = baseSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
   boxes.innerHTML = "";
}
