
const inputValidation = document.querySelector("#validation-input")

inputValidation.addEventListener("blur", inputColorReplace)

function inputColorReplace () {
   if (inputValidation.value.length === Number(inputValidation.dataset.length)) {
      inputValidation.classList.add("valid")
      inputValidation.classList.remove("invalid")
   } else {
      inputValidation.classList.remove("valid")
      inputValidation.classList.add("invalid")
   } 
}
