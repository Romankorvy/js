'use strict';

//task1
//Напишите функцию sumTo(n), 
//которая для данного n вычисляет сумму чисел от 1 до n, например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

//С использованием цикла

function sumTo(n) {
  var sum = 0; // Начальное значение 0
  for (var i = 1; i <= n; i++) { // Начинает сложение с 1, когда будет i=100 вернется последние вычисление sum
    sum += i;
  }
  return sum;
}
alert(sumTo(100));

// Решение через рекурсию

 function sumTo(n) {  // Суммировать начинаем со 100 с уменьшением
  if (n === 1) {return 1}  // Если i=1 возвращаем 1. конец вычислениям.
  else { // Иначе
  return n + sumTo(n - 1)}; //Возращаем сумму n и sumTo (на 1 меньше)
}
alert(sumTo(100));

// Пример

// function sumTo(100) { 
//   if (100 === 1) {return 1}  
//   else { 
//   return 100 + sumTo(99)}; 
// }
// alert( sumTo(100) );

// function sumTo(99) { 
//   if (99 === 1) {return 1}  
//   else { 
//   return 199 + sumTo(98)}; 
// }
// alert( sumTo(100) );

//task2
//Вычислить факториал n! = n * (n - 1) * (n - 2) * ...*1

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1; // Если n не равно 1, то n умножаем на результат функции
}
alert(factorial(5));

//Пример

// function factorial(5) {
//   return (5 != 1) ? 5 * factorial(4) : 1; // Если n не равно 1, то n умножаем на результат функции
// }
// alert( factorial(5) );

// function factorial(4) {
//   return (4 != 1) ? 20 * factorial(3) : 1; // Если n не равно 1, то n умножаем на результат функции
// }
// alert( factorial(5) );

// function factorial(3) {
//   return (3 != 1) ? 60 * factorial(2) : 1; // Если n не равно 1, то n умножаем на результат функции
// }
// alert( factorial(5) );

// function factorial(2) {
//   return (2 != 1) ? 120 * factorial(1) : 1; // Если n равно 1, конец вычесления.Возвращаем n=120.
// }
// alert( factorial(5) );

//task3
// Числа Фибоначчи имеет формулу Fn = Fn-1 + Fn-2
// Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert(fib(3)); // 2
alert(fib(7)); // 13

//Пример

// fib(0) = 0
// fib(1) = 1
// fib(2) = fib(1) + fib(0) -> 1 + 0 = 1
// fib(3) = fib(2) + fib(1) -> 1 + 1 = 2
// fib(4) = fib(3) + fib(2) -> 2 + 1 = 3;
// fib(5) = fib(4) + fib(3) -> 3 + 2 = 5;
// fib(6) = fib(5) + fib(4) -> 5 + 3 = 8;
// fib(7) = fib(6) + fib(5) -> 8 + 5 = 13;

//task4
//Проверка на NFE
//Каков будет результат выполнения кода?

function g() { 
  return 1;  
}; 
alert(g);//объявление функции Function Declaration, выведет сообщение - function g() { return 1; }.

(function g() { 
  return 1; 
});
alert(g); //объявление функции Function Declaration, выведет сообщение - function g() { return 1; }.

//task5
//Интерфейс суммы
//Создайте страницу, которая предлагает ввести два числа и выводит их сумму.

var a = +prompt('Введите число', ''); // Значение a приводим к числу используя унарный +.
var b = +prompt('Введите число', ''); // Значение b приводим к числу используя унарный +.
alert( a + b );

//task6
//Почему 6.35.toFixed(1) == 6.3?
alert(6.35.toFixed(20)); //6.34999999999999964473
//Числа хранятся в двоичной системе счисления. Округляется вниз, потому, что 6.34
//последняя 4.

//task7
//Сложение цен

var result = 0.1 + 0.2;
alert(+result.toFixed(10));//Округления до 10-го знака обычно бывает достаточно,
// чтобы отсечь ошибку вычислений.

//task8
//Этот цикл – бесконечный. Почему?

var i = 0;
while (i != 10) {
  i += 0.2;
}
// i не будет равная точно 10.

//task9
// Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:


//task10
//Напишите функцию fibBinet(n), которая будет вычислять Fn, используя эту формулу.
// Проверьте её для значения F77 (должно получиться fibBinet(77) = 5527939700884757).


function fibBinet(n) {
  var fi = (1 + Math.sqrt(5)) / 2; //Расчет ϕ=(1+√5)/2
  
  return Math.round(Math.pow(fi, n) / Math.sqrt(5)); //Возвращаем рачсет Fn=ϕn/√5
}
//Код для их вычисления Числа Фибоначчи.
function fib(n) {
  var a = 1, b = 0, x;

  for (i = 0; i < n; i++) {
    x = a + b;
    a = b
    b = x;
  }
  return b;
}

alert(fibBinet(77)); // 5527939700884755
alert(fib(77)); // 5527939700884757, √5  бесконечная дробь - несовпадает.

//task11
//Напишите код для генерации случайного значения в диапазоне от 0 до max, не включая max.

var max = 20;

alert(Math.random() * max);// умножая дробь на max, результат будет не равным max.

//task12
//Напишите код для генерации случайного числа от min до max, не включая max.

var max = 10;
var min = 1;

alert(min + Math.random() * (max - min));

//task13
//Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и max,
// включая min,max как возможные значения.

function randomInteger(min, max) {
  var random = min - 0.5 + Math.random() * (max - min + 1)
    random = Math.round(random);
    return random;
}
alert(randomInteger(1, 6)); // минимальное значение 1.1 и максимум 6,5 + округление.


//Math.random = 0.1
// random = 1 - 0.5 + 0.1 * (6 - 1 + 1) = 0.5 + 0.1 * 6 = 0.5 + 0.6 = 1.1 округляем до 1.

//Math.random = 1
// random = 1 - 0.5 + 1 * (6 - 1 + 1) = 0.5 + 1 * 6 = 0.5 + 6 = 6,5 округляем до 6.


