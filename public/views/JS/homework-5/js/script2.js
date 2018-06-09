'use strict';

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