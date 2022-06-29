let n = +prompt('Enter the number: ');

let result = "";

for(let i=0; i < n; ++i) {
    let value = +prompt('Enter the value: ');

    if(value % 3 == 0 || value % 10 == 3) {
        result += (value + ' ');
    }
}

console.log(result);