let x = +(prompt('Enter the number:'));

let y = 2 * Math.pow(x,2) + 3 * x + 10;
// Про тернарные операторы
// (условия) ? (блок кода) : (блок кода при false изначальной условии);
let result = (y / x >= 3 * x ) ? 'YES\n' : 'NO\n';

let result2 = (y / (x/2) < 3 * x || (y>= 0 && y <= 400)) ? y : x;

console.log(result);
console.log(result2);