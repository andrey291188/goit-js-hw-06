const inputController = document.querySelector("#font-size-control")
const textReaction = document.querySelector("#text")

inputController.addEventListener("input", InputRange)

function InputRange(event) {
    textReaction.style.fontSize = `${inputController.value}px`
  }
  
