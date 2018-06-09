'use strict';

//task1

//Сделать первый символ заглавным
//Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:
// ucFirst("вася") == "Вася";
// ucFirst("") == ""; // нет ошибок при пустой строке


var ucFirst = 'вася';
 alert(ucFirst[0].toUpperCase()+ ucFirst.slice(1));
 // ucFirst[0].toUpperCase() - меняем регистр 1й буквы
 // ucFirst.slice(1)) - возвращает часть строки от позиции 1.

 var ucFirst = 'вася';
 alert(ucFirst.charAt(0).toUpperCase() + ucFirst.slice(1));

//task2
//Проверьте спам

//Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam(str) {
  var lowerStr = str.toLowerCase();

  return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

//Усечение строки
