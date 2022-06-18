// Работа с библиотекой Math

let num = 49;
// 10^18

console.log("SQRT: " + Math.sqrt(num)); // Корень квадратный
console.log("Power: " + Math.pow(num, 2)); // Возведение в степень
console.log("Max: " + Math.max(num, 20, 100, 35)); // Нахождение максимума
console.log("Min: " + Math.min(num, 20, 100, 35)); // Нахождение минимума

console.log("ABS: " + Math.abs(-num)); // Знак модуль | x |

// Работа с округлениеми

console.log(Math.round(43.5)); // Работает как, если после точки число больше или равно 5ти то округление вверх
console.log(Math.round(43.4)); // Иначе, округление вниз

console.log(Math.ceil(43.1)); // ceil всегда округляет вверх

console.log(Math.floor(43.9)); // всегда округляет вниз

// random

console.log(Math.random()); // [0, 1); -> [0 100)

console.log(Math.round(Math.random()*100));