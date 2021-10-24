"use script";

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous";

const refs = {
    inputEl: document.querySelector("#name-input"),
    outputEl: document.querySelector("#name-output"),
}

refs.inputEl.addEventListener("input", onChangeInput);

function onChangeInput (event){
    refs.outputEl.textContent = event.currentTarget.value;
    if (refs.outputEl.textContent === ""){
    refs.outputEl.textContent = "Anonimus";
    }
}