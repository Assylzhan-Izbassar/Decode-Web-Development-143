let a = +prompt('Enter an a');
let b = +prompt('Enter a b');

let result = 0;
let sumOfNumbers = 0;

for(let i=a; i <= b; ++i) {
    if((i >= 10 && i <= 99) && (i % 2 == 0)) { // Двузначное число
        // let ones = i % 10;
        // let tens = i / 10;
        // let sumOfDigits = ones + tens;

        if((i / 10 + i % 10) < 15) {
            result += i;
        }
    }
}

console.log(result);