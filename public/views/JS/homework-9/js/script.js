'use strict';

//task1
//Каков будет результат кода?

if ("a" in window) {
  var a = 1;
}
alert(a); //1
//Конструкция if не влияют на видимость переменных,переменная будет создана до выполнения цикла.



//task2
//Каков будет результат (перед a нет var)?

if ("a" in window) {
  a = 1;
}
alert(a);//Переменная создается в момент присвоения, условие невыполнится,т.е error

//task3
//Каков будет результат (перед a нет var, а ниже есть)?

if ("a" in window) {
  a = 1;
}
var a;

alert(a);//Переменная будет создана до выполнения цикла, на стадии инициализации
//выполнится условие, a = 1.

//task4
//Что будет, если вызов say('Вася'); стоит в самом-самом начале, в первой строке кода?

say('Вася'); // Что выведет? Не будет ли ошибки?

var phrase = 'Привет';

function say(name) {
  // LexicalEnvironment = { name: 'Привет', phrase: undefined }
  alert( name + ", " + phrase );
}

//task5
// Каков будет результат выполнения этого кода?

var value = 0;

function f() {
  // LexicalEnvironment = { value: undefined }
  if (1) {
    value = true;
  } else {
    var value = false;
  }
  debugger
  alert(value);//true
}

f();

//Изменится ли внешняя переменная value ? Нет
//Какими будут ответы, если из строки var value = false убрать var?
//Ответ true и внешняя переменная перезапишется.

//task6
//Каков будет результат выполнения этого кода? Почему?

function test() {
  //LexicalEnvironment = { window: undefined }
  alert(window);//undefined
  ////LexicalEnvironment = { window: 5 }
  var window = 5;

  alert(window);//5
}

test();

// task6
// Каков будет результат выполнения кода? Почему?

var a = 5  // нет точки с запятой.

(function() {
  alert(a)
})()

// task7
//Если во внутренней функции есть своя переменная с именем currentCount – можно ли 
//в ней получить currentCount из внешней функции?

function makeCounter() {
  var currentCount = 1;

  return function() {
    var currentCount;//Тут свое LexicalEnvironment несвязанное с function makeCounter, поэтому нет
    // можно ли здесь вывести currentCount из внешней функции (равный 1)?
  };
}

// task8
//Что выведут эти вызовы, если переменная currentCount находится вне makeCounter?

var currentCount = 1;//Один глобальный счетчик

function makeCounter() {
  return function() {
    return currentCount++;
  };
}

var counter = makeCounter();
var counter2 = makeCounter();

alert(counter()); // 1
alert(counter()); // 2

alert(counter2()); // 3
alert(counter2()); // 4

