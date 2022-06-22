// Надо найти максимум из двух чисел

let a = +prompt('Enter the a');
let b = +prompt('Enter the b');

// условия?
if (a > b) { 
    console.log(`Maximum is a with value ${a}`);
} else { // Инача
    // Обязательно b будет больше
    // Условия выполнимости else будет a <= b
    console.log(`Maximum is b with value ${b}`);
}

// nigation of (a > b) => (a <= b)