'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
let text = document.querySelector('.text');
let a = document.querySelectorAll('.nav-link');
a.forEach((element) => {
    element.addEventListener('click', function(event) {
        clickHandler(event.target);
    });
});
/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    
    if(event.classList.value == 'nav-link') {
        changeActiveClass(event);
        changeText(event);
    }
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    a.forEach((element) => {
        element.className = 'nav-link';
    });
    event.classList.toggle('active');
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    if(event.textContent == 'Link 1'){
        text.textContent = `${texts.text1}`;
    } else if(event.textContent == 'Link 2'){
        text.textContent = `${texts.text2}`;
    } else {
        text.textContent = `${texts.text3}`;
    }
}