let direction = { x: 0, y: 0 };
let prevDirection = { x: 0, y: 0 };

window.addEventListener('keydown', function(event) {
    switch(event.key) {
        case "ArrowUp":
            if(prevDirection.y == 1) break;
            direction = { x: 0, y: -1 };
            break;

        case "ArrowDown":
            if(prevDirection.y == -1) break;
            direction = { x: 0, y: 1 };
            break;
        
        case "ArrowLeft":
            if(prevDirection.x == 1) break;
            direction = { x: -1, y: 0 };
            break;

        case "ArrowRight":
            if(prevDirection.x == -1) break;
            direction = { x: 1, y: 0 };
            break;
    }

    console.log(event.key);
});

export function getDirection() {
    prevDirection = direction;
    return direction;
}

export function getPrevDirection() {
    return prevDirection;
}