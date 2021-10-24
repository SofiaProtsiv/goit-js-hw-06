"use.strict";


// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color 
//и выводит значение цвета в span.color.

const onButtonClick = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorName = document.querySelector('.color');

colorName.textContent = window.getComputedStyle(colorName).backgroundColor;

function colorChange() {
  colorName.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorName.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
onButtonClick.addEventListener("click", colorChange)