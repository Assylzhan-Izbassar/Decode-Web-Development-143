import { getDirection } from "./move.js";


const snakeBody = [
    { x: 10, y: 10 }
];

export function update() {
    const direction = getDirection();

    for(let i = snakeBody.length - 1; i > 0; --i) {
        snakeBody[i] = {...snakeBody[i-1]};
    }

    snakeBody[0].x += direction.y;
    snakeBody[0].y += direction.x;
}

export function draw(gameBoard) {
    snakeBody.forEach((peace) => {
        const snakeElement = document.createElement('div');
        snakeElement.className = "snake";
        snakeElement.style.gridRowStart = peace.x;
        snakeElement.style.gridColumnStart = peace.y;
        gameBoard.append(snakeElement);
    });
}