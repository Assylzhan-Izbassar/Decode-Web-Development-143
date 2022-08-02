const sliderWindow = document.querySelector('.slider__inner');
const sliderCircle = document.querySelector('.slider__circles');
const btnLeft = document.querySelector('.btns__left');
const btnRight = document.querySelector('.btns__right');

const IMG_SHIFT_DELTA = 256;

let position = 0;
let currentImg = 0;

let imgs = ['imgs/1.jpeg', 'imgs/2.jpeg', 'imgs/3.jpeg'];

load();

function load() {
    for(let img of imgs) {
        const tag = document.createElement('img');
        tag.src = img;

        sliderWindow.append(tag);

        const div = document.createElement('div');
        div.className = 'slider__circle';

        sliderCircle.append(div);
    }
}

function fillCircle() {
    sliderCircle.children[currentImg].style.backgroundColor = 'black';
    
    for(let i=0; i< sliderCircle.children.length; ++i) {
        if(i != currentImg) {
            sliderCircle.children[i].style.backgroundColor = 'coral';
        }
    }
}

fillCircle();

btnRight.addEventListener('click', function() {
    position -= IMG_SHIFT_DELTA;
    if(position < -512) {
        position = 0;
    }
    sliderWindow.style.left = `${position}px`;

    currentImg = position/IMG_SHIFT_DELTA * (-1);
    fillCircle();
});

btnLeft.addEventListener('click', function() {
    position += IMG_SHIFT_DELTA;
    if(position > 0) {
        position = -512;
    }
    sliderWindow.style.left = `${position}px`;

    currentImg = position/IMG_SHIFT_DELTA * (-1);
    fillCircle();
});
