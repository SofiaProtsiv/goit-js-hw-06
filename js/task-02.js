    "use strict";

// 1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2. Добавит название ингредиента как его текстовое содержимое.
// 3. Добавит элементу класс item.
// 4. После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");

const listOfIngridients = ingredients.map(ingredient => {
  let item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  return item;
});
  ingredientsList.append(...listOfIngridients);