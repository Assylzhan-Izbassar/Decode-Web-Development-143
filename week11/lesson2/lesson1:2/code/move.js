let direction = { x: 0, y: 0 };

window.addEventListener('keydown', function(event) {
    switch(event.key) {
        case "ArrowUp":
            direction = { x: 0, y: -1 };
            break;

        case "ArrowDown":
            direction = { x: 0, y: 1 };
            break;
        
        case "ArrowLeft":
            direction = { x: -1, y: 0 };
            break;

        case "ArrowRight":
            direction = { x: 1, y: 0 };
            break;
    }

    console.log(event.key);
});

export function getDirection() {
    return direction;
}