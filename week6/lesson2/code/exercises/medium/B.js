let a = +prompt('Enter an a');
let b = +prompt('Enter a b');

let x = a;
let y = b;

if(a < b) {
    let temp = a;
    a = b;
    b = temp;
}

while (b) {
    a = a % b;

    let temp = a;
    a = b;
    b = temp;
}

console.log(x*y / a);