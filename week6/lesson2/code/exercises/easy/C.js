let n = +prompt('Enter the n: ');
let k = +prompt('Enter the k: ');

let result = "";

for(let i=k; i <= n*k; i += k) {
    result += (i + ' ');
}

console.log(result);