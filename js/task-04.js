"use strict";

// 1. Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// 2. Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// 3. Обновляй интерфейс новым значением переменной counterValue.


const button = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    counter: document.querySelector("#value"),
  };
  
  let counterValue = 0;
  
  const increment = () => {
    counterValue += 1;
    button.counter.textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
    button.counter.textContent = counterValue;
  };
  
  button.sub.addEventListener("click", increment);
  button.add.addEventListener("click", decrement);
