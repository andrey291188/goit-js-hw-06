
const inputValidation = document.querySelector("#validation-input")

inputValidation.addEventListener("blur", inputColorReplace)

function inputColorReplace () {
   if (!inputValidation.value.length){
      inputValidation.classList.remove("invalid")
      inputValidation.classList.remove("valid")
   } else if (inputValidation.value.length < inputValidation.dataset.length) {
   inputValidation.classList.add("invalid")
   } else {
    inputValidation.classList.remove("invalid")
    inputValidation.classList.add("valid")
   } 
}
