main();

function main() {

    let arr = inputArr();

    const result = evenIndex(arr);

    console.log(result);
}

function inputArr() {

    let n = +prompt("Enter the length");

    let arr = [];

    for(let i=0; i < n; ++i) {
        arr[i] = +prompt("Enter the element");
    }

    return arr;
}


// Third task
function cntPositive(arr) {
    let cnt = 0; // <- 
    for(let i=0; i < arr.length; ++i) {

        if(arr[i] > 0) {
            cnt++;
        }
    }
    return cnt;
}

// First task
function evenIndex(arr) {

    let result = [];

    for(let i=0; i < arr.length; ++i) {
        if(i % 2 == 0) {
            result.push(arr[i]);
        }
    }

    return result;
}