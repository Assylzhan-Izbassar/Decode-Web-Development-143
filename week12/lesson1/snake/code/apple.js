import { isCollision, growSnake } from './snake.js';

let applePos = { x: 18, y: 18 };

export function update() {
    if(isCollision(applePos)) {
        applePos = getRandomValue();
        growSnake();
    }
};


export function draw(gameBoard) {
    const appleElement = document.createElement('div');
    appleElement.className = "apple";
    appleElement.style.gridRowStart = applePos.x;
    appleElement.style.gridColumnStart = applePos.y;
    gameBoard.append(appleElement);
};

function getRandomValue() {
    let newApplePos;

    while(newApplePos == null || isCollision(newApplePos)) {
        newApplePos = randomGripPosition();
    }

    return newApplePos;
}

function randomGripPosition() {
    return {
        x: Math.round(Math.random() * 27) + 1,
        y: Math.round(Math.random() * 27) + 1
    };
}