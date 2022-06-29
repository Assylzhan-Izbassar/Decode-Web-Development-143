let n = +prompt('Enter the length of an array');

let arr = [];

for(let i=0; i < n; ++i) {
    let x = +prompt('Enter the value of the array');
    arr[i] = x;
}

let product = 1;

for(let x of arr) {
    product *= x;
}

// result

document.write(arr.join(" * "));
document.write(" = ");
document.write("<hr>");

document.write(product);