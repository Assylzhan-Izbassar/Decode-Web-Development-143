let n = +prompt('Enter the length of an array');

let arr = [];

for(let i=0; i < n; ++i) {
    let x = +prompt('Enter the value of the array');
    arr[i] = x;
}

let res = [];

for(let x of arr) {
    if(x >= 3 && x <= 10) {
        res.push(x);
    }
}

console.log(res.toString());