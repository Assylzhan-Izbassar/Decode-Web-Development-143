// Is Prime?

let N = +prompt('Enter the N: ');
let result = true;

for(let i=2; i <= Math.sqrt(N); ++i) {
    if(N % i == 0) {
        result = false;
        break;
    }
}

if(result) {
    console.log('Prime');
} else {
    console.log('Not prime');
}