import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getHeadOfSnake } from './snake.js';
import { update as updateApple, draw as drawApple } from './apple.js';

const gameBoard = document.querySelector('.game-board');

let prevTime = 0;
let isGameOver = false;

main();

function main(currentTime) {

    if(isGameOver || isCollapsedWithBoarder()) {
        return alert("GAME OVER!");
    }

    window.requestAnimationFrame(main);

    const deltaTime = (currentTime - prevTime) / 1000;

    if(deltaTime < 1 / SNAKE_SPEED) return;
    prevTime = currentTime;

    update();
    draw();
}

export function setGameOver(value) {
    isGameOver = value;
}

function isCollapsedWithBoarder() {
    const head = getHeadOfSnake();
    return head.x < 1 || head.x > 27 || head.y < 1 || head.y > 27;
}
 
function update() {
    updateSnake();
    updateApple();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawApple(gameBoard);
}