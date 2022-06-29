let n = +prompt('Enter the length of an array');

let arr = [];

for(let i=0; i < n; ++i) {
    let x = +prompt('Enter the value of the array');
    arr[i] = x;
}

let pivot = +prompt('Enter the pivot element');

// linear search

for(let x of arr) {
    if(pivot === x) {
        console.log("Есть!");
        break;
    }
}

// binary search
// primary condition is sort of array

arr.sort();

let l = 0;
let r = arr.length;

while(l < r) {
    let mid = Math.floor((l + r) / 2);

    if(arr[mid] == pivot) {
        console.log("Есть!");
        console.log("Binary!");
        break;
    } else if (arr[mid] > pivot) {
        l = mid + 1;
    } else {
        r = mid;
    }
}