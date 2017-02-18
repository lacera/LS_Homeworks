/* ДЗ 5.1 - DOM Events */

/**
 * Функция должна добавлять обработчик fn события eventName к элементу target
 *
 * @param {string} eventName - имя события, на которое нужно добавить обработчик
 * @param {Element} target - элемент, на который нужно добавить обработчик
 * @param {function} fn - обработчик
 */
function addListener(eventName, target, fn) {
    target.addEventListener(eventName, fn);
}

/**
 * Функция должна удалять обработчик fn события eventName у элемента target
 *
 * @param {string} eventName - имя события, для которого нужно удалить обработчик
 * @param {Element} target - элемент, у которого нужно удалить обработчик
 * @param {function} fn - обработчик
 */
function removeListener(eventName, target, fn) {
    target.removeEventListener(eventName, fn);
}

/**
 * Функция должна добавлять к target обработчик события eventName, который должен отменять действие по умолчанию
 *
 * @param {string} eventName - имя события, для которого нужно удалить обработчик
 * @param {Element} target - элемент, на который нужно добавить обработчик
 */
function skipDefault(eventName, target) {
    function handler (e) {
        e.preventDefault();
    }

    target.addEventListener(eventName, handler);
}

/**
 * Функция должна эмулировать событие click для элемента target
 *
 * @param {Element} target - элемент, на который нужно добавить обработчик
 */
function emulateClick(target) {
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, true, window, 1, screenX, screenY, target.offsetTop + 1, target.offsetLeft + 1, false, false, false, false, 0, null);
    target.dispatchEvent(event);
}

/**
 * Функция должна добавить такой обработчик кликов к элементу target
 * который реагирует (вызывает fn) только на клики по элементам BUTTON внутри target
 *
 * @param {Element} target - элемент, на который нужно добавить обработчик
 * @param {function} fn - функция, которую нужно вызвать при клике на элемент BUTTON внутри target
 */
function delegate(target, fn) {
    function handler (e) {
        if (e.target.nodeName === 'BUTTON') {
            fn();
        }
    }
    
    target.addEventListener('click', handler);
}

/**
 * *** Со звездочкой ***
 * Функция должна добавить такой обработчик кликов к элементу target
 * который сработает только один раз и удалится
 * Постарайтесь не создавать глобальных переменных
 *
 * @param {Element} target - элемент, на который нужно добавить обработчик
 * @param {function} fn - обработчик
 */
function once(target, fn) {
}

export {
    addListener,
    removeListener,
    skipDefault,
    emulateClick,
    delegate,
    once
};
