
const refs = {
    inputElement: document.querySelector("#name-input"),
    textElement: document.querySelector("#name-output")
}

refs.inputElement.addEventListener('input', onInputChange);
refs.inputElement.addEventListener("blur", onInputBlur);

function onInputChange (event) {
    refs.textElement.textContent = event.currentTarget.value;
}

function onInputBlur (event) {
  if (!refs.inputElement.value.length) {
  refs.textElement.textContent = "Anonymous";
  }
}