function getLocation(coordinates, commands) {
    let x = coordinates[0];
    let y = coordinates[1];

    for(let command of commands) {
        if(command === "forward") {
            y += 1;
        } else if (command === "left") {
            x -= 1;
        } else if(command === "right") {
            x += 1;
        } else if(command === "back") {
            y -= 1;
        }
    }

    return [x, y];
}

console.log(getLocation([2, 3], ["back"]));