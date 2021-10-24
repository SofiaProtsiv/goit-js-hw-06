"use strick";

// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const validationInput = document.querySelector('#validation-input');
const dataLength = Number(validationInput.getAttribute('data-length'));
validationInput.addEventListener("blur", onInputChange)
//validationInput.addEventListener("input", onInputChange)  змінює колір при вводі даних

function onInputChange(event){
    validationInput.textContent = event.currentTarget.value;
    
    if(validationInput.textContent.length === dataLength){
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    } else{
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
}