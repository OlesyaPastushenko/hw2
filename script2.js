// <!-- Задача 2. Ваша задача - сделать функцию, которая возвращает сумму последовательности 
// целых чисел. Последовательность определяется тремя неотрицательными значениями:
//  начало, конец, шаг. Если начальное значение больше конца, функция должна вернуть 0 -->

sum = 0;
 function toSum (start, end, step) {
     if (start > end) {
     sum = sum + 0; }
     else {
         sum = end + toSum(start, end - step, step);
     }
     return sum ;
 }
 console.log(toSum(0,12,2));
