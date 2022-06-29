let n = +prompt('Enter the number');

let result = "";

for(let i = n; i >= 1; --i) {
    if(i % 2 == 0) {
        result += (i + ' ');
    }
}

/*

for(; n > 0; --n) {
    if(!(n % 2)) {
        result += (n + ' ');
    }
}

*/

console.log(result);