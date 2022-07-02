let animal = {
    type: "elephant",
    area: "India",
    color: "grey",
    eyeColor: "brown",
    isFriendly: true
};

// Обращаться к полям объекта

document.write(animal.area);
console.log(animal["color"]);

//удаление полей объекта

delete animal.eyeColor;
console.log(animal);


// цикл

for(let idx in animal) {
    console.log(idx + " " + animal[idx]);
}