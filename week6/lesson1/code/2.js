// [0 10) - ребенок
// [10 20) - подросток
// [20 50) - взрослый
// [50 120) - пожилой

let age = prompt('Enter the age: ');

if (typeof(age) === Number) {
    console.log('Number');
} else {
    console.log('NaN'); // Not a number
}

console.log(Boolean(0 == ""));

if (age >= 0 && age < 10) {
    console.log('ребенок');
} else if (age >= 10 && age < 20) {
    console.log('подросток');
} else if (age >= 20 && age < 50) {
    console.log('взрослый');
} else if (age >= 50 && age < 120) {
    console.log('пожилой');
} else {
    console.log('не человек');
}


// [0 120) - не входит в это ограничение, то 
// если у нас age не число

