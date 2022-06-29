let sum = 0;

while(true) {

    let value = +prompt('Enter the number');

    if(!value) { // 0 -> false => !false = true
        // break - останавливает наш цикл
        break;
    }

    sum += value; // sum = sum + value;
}

console.log(sum);