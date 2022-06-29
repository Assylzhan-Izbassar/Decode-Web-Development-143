let cars = ['Toyota', 'Mercedes', 'BMW', 'VW', 'KIA'];

for(let i=0; i < cars.length; ++i) {
    document.write(cars[i]);
    document.write("<br>");
}

document.write("<hr>");

// method toString
document.write(cars.toString());

document.write("<hr>");

// method join
document.write(cars.join(" - "));

// methods

// push()
document.write("<hr>");
cars.push("JAC");
document.write(cars.toString());

// pop()
document.write("<hr>");
cars.pop();
document.write(cars.toString());

// shift()
document.write("<hr>");
cars.shift();
for(let i=0; i < cars.length; ++i) {
    document.write(cars[i] + ` - with index ${i}`);
    document.write("<br>");
}

// unshift()
document.write("<hr>");
cars.unshift("Jaguar");
for(let i=0; i < cars.length; ++i) {
    document.write(cars[i] + ` - with index ${i}`);
    document.write("<br>");
}

// removing element by delete operator
document.write("<hr>");
delete cars[3];
for(let i=0; i < cars.length; ++i) {
    document.write(cars[i] + ` - with index ${i}`);
    document.write("<br>");
}

// concat()
let planes = ['AirBus', 'Boeing', 'Concord'];

// let transports = cars.concat(planes);
let transports = planes.concat(cars);

document.write("<hr>");
document.write(transports.toString());

// splice()
cars.splice(1, 0, ['Lada', 'Chevrolet']);
document.write("<hr>");
for(let i=0; i < cars.length; ++i) {
    document.write( `${i}) ` + cars[i]);
    document.write("<br>");
}

// removing element with method splice()
cars.splice(4, 1);
document.write("<hr>");
for(let i=0; i < cars.length; ++i) {
    document.write(`${i}) ` + cars[i]);
    document.write("<br>");
}

// shifting the array after method splice()
let temp = [];

document.write("<hr>");
for(let i=0; i < cars.length; ++i) {
    document.write(`${i}) ` + cars[i]);
    // document.write("<hr>");
    // console.log(typeof(cars[i]));
    if(typeof(cars[i]) == typeof({})) {
        for(let j=0; j < cars[i].length; ++j) {
            // document.write(`${j}) ` + cars[i][j] + "<br>");
            temp.push(cars[i][j]);
        }
    } else {
        temp.push(cars[i]);
    }
    document.write("<br>");
}


// содержание temp
document.write("<hr>");
for(let i=0; i < temp.length; ++i) {
    document.write(`${i}) ` + temp[i]);
    document.write("<br>");
}

cars = temp;

// slice()
let germanCars = cars.slice(3, 5);
console.log(germanCars);