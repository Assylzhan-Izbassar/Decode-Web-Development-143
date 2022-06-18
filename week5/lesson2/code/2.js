// Типы данных 

// Базовые
let num = 112.4;
let bigInt = 3758347584375238573485734825974589207328752375943n;
let str = "string";
let bool = true; // or false;

// Reference type
let object = {
    'name': "Assyl's name",
    'age': 20 
};

let func = function(name) {
    // Assyl's car
    // ''
    // ""
    // ``
    console.log(`Hello, ${name}`);
};

let x;

console.log("Extra types:");
console.log(typeof(undefined));
console.log(typeof(null));
console.log(typeof(Infinity));

console.log("Basic types:");
console.log(typeof(num));
console.log(typeof(bigInt));
console.log(typeof(str));
console.log(typeof(bool));
console.log(typeof(object));
console.log(typeof(func));

document.write(num);