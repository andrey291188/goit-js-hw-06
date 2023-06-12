
const refs = {
    inputElement: document.querySelector("#name-input"),
    textElement: document.querySelector("#name-output")
}

refs.inputElement.addEventListener('input', onInputChange);

function onInputChange (event) {
    refs.textElement.textContent = event.currentTarget.value;
      if (!refs.inputElement.value.length) {
  refs.textElement.textContent = "Anonymous";
  }
}
