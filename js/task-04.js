const refs = {
    btnPlus: document.querySelector("[data-action='increment']"),
    btnMinus: document.querySelector("[data-action='decrement']"),
    checkValue: document.querySelector('#value'),
  };
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
  
    refs.checkValue.textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    refs.checkValue.textContent = counterValue;
  };
  refs.btnPlus.addEventListener('click', increment);
  refs.btnMinus.addEventListener('click', decrement);
