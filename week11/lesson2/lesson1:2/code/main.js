import { update as updateSnake, draw as drawSnake } from './snake.js';

const gameBoard = document.querySelector('.game-board');

let prevTime = 0;
const SNAKE_SPEED = 3;

main();

function main(currentTime) {
    window.requestAnimationFrame(main);

    const deltaTime = (currentTime - prevTime) / 1000;

    if(deltaTime < 1 / SNAKE_SPEED) return;
    prevTime = currentTime;

    update();
    draw();
    // console.log(deltaTime);
}

function update() {
    updateSnake();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
}