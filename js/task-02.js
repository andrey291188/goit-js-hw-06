const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector("#ingredients");

const ingrededElement = (option) => {
  return option.map(option => {
    const liElements = document.createElement("li");
    liElements.classList.add("item");
    liElements.textContent = option;
  
    return liElements
    
  })  
}

const elements = ingrededElement(ingredients);

ulElement.append(...elements);
