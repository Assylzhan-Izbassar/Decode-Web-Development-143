let cars = ['Toyota', 'Mercedes', 'BMW', 'VW', 'KIA'];

// let body = document.getElementsByTagName('body')[0];

let text = "<ul>";

for(let i=0; i < cars.length; ++i) {
    text += `<li>${cars[i]}</li>`
}

text += "</ul>";

// body.append(text);
// document.write(text);

// for in
for(let idx in cars) {
    console.log(idx + ") " + cars[idx]);
}

// for of
for(let element of cars) {
    console.log(element);
}