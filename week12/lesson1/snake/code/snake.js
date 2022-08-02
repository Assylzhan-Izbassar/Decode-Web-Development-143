import { getDirection, getPrevDirection } from "./move.js";
import { setGameOver } from "./main.js";

export const SNAKE_SPEED = 5;

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

    if(isSnakeIntersection()) {
        setGameOver(true);
    }
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

// checking is the snake made collision with another element

export function isCollision(applePos) {
    return snakeBody.some(function(segment) {
        return isEqual(segment, applePos);
    });
}

function isEqual(position1, position2) {
    return (position1.x == position2.x) && (position1.y == position2.y);
}

// growing the snake
export function growSnake() {
    let size = snakeBody.length;

    let pos = getPrevDirection();

    snakeBody.push({
        x: snakeBody[size-1].x + pos.y,
        y: snakeBody[size-1].y + pos.x
    });
}


// snake intersection

export function getHeadOfSnake() {
    return snakeBody[0];
}

function isSnakeIntersection() {
    const snakeHead = getHeadOfSnake();

    for(let i=snakeBody.length-1; i >= 1; --i) {
        if(isEqual(snakeHead, snakeBody[i])) {
            return true;
        }
    }
    return false;
}