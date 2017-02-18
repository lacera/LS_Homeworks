/* ДЗ 5.2 - Div D&D */

/** Со звездочкой */
/**
 * Создать страницу с кнопкой
 * При нажатии на кнопку должен создаваться div со случайными размерами, цветом фона и позицией
 * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 * Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');

/**
 * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 * Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 * Функция НЕ должна добавлять элемент на страницу
 *
 * @return {Element}
 */
function createDiv() {
    let elem = document.createElement('div');

    function rand (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    elem.classList.add('draggable-div');

    elem.style.backgroundColor = 'rgb(' + rand(0, 256) + ',' + rand(0, 256) + ',' + rand(0, 256) + ')';
    elem.style.height = rand(50, 300) + 'px';
    elem.style.width = rand(50, 600) + 'px';
    elem.style.top = rand(10, document.body.clientHeight - +elem.style.height.replace('px', '')) + 'px';
    elem.style.left = rand(10, document.body.clientWidth - +elem.style.width.replace('px', '')) + 'px';

    // задаем position создаваемого элемента для возможности drag'n'drop-а
    elem.style.position = 'absolute';

    return elem;
}

/**
 * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
 *
 * @param {Element} target
 */
function addListeners(target) {
    let dragElement = false;

    function drag () {
        target.style.zIndex = 100;
        dragElement = true;
    }

    function move (e) {
        if (dragElement) {
            target.style.left = (e.clientX - +target.style.width.replace('px', '')/2) + 'px';
            target.style.top = (e.clientY - +target.style.height.replace('px', '')/2) + 'px';
        }
    }

    function drop () {
        --target.style.zIndex;
        dragElement = false;
    }

    target.addEventListener('mousedown', drag);
    target.addEventListener('mousemove', move);
    target.addEventListener('mouseup', drop);
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    let div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации d&d
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
