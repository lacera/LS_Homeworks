/* ДЗ 1 - Функции */

/*
 Задание 1:

 Функция должна принимать один аргумент и возвращать его
 */
function returnFirstArgument(arg) {
    return arg;
}

/*
 Задание 2:

 Функция должна принимать два аргумента и возвращать сумму переданных значений
 Значение по умолчанию второго аргумента должно быть 100
 */
function defaultParameterValue(a, b) {
    b = b || 100;

    return a + b;
}

/*
 Задание 3:

 Функция должна возвращать все переданные в нее аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 */
function returnArgumentsArray() {
    var result = [];

    for (var i = 0; i < arguments.length; i++) {
        result.push(arguments[i]);
    }

    return result;
}

/*
 Задание 4:

 Функция должна принимать другую функцию и возвращать результат вызова переданной функции
 */
function returnFnResult(fn) {
    return fn();
}

/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
function returnCounter(number) {
    number = number || 0;

    return function F() {
        return ++number;
    };
}

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 */
function bindFunction(fn) {
    // return fn.bind(null, arguments[1], arguments[2]); // совсем примитив, написанный мной

    // найдено в инете: код для любого количества переданных аргументов, но не разобрался полностью, как это работает
    var fnArgs = [].slice.call(arguments, 1); /* одалживаем slice и выполняем с контекстом arguments,
                                                 начиная с первого элемента (нулевой элемент -
                                                 это функция, отсекаем), на выводе получаем массив */

    return function() {
        return fn.apply(this, fnArgs); /* вернули функцию, которая вернет вызов функции-аргумента
                                          с любым количеством дополнительны аргументов */
    };
}

export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
