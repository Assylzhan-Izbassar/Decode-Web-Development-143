let a = +prompt("Enter an 'a':");
let b = +prompt("Enter a 'b':");

let sum = 0;

// a до b
for(let i=a; i <= b; ++i) {
    sum += i;
}

console.log(sum);