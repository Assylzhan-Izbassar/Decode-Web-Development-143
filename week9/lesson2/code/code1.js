const sliderWindow = document.querySelector('.slider__window img');
const btnLeft = document.querySelector('.btns__left');
const btnRight = document.querySelector('.btns__right');

let imgs = ['imgs/1.jpeg', 'imgs/2.jpeg', 'imgs/3.jpeg'];
let currentPosition = 0;

sliderWindow.src = imgs[currentPosition];


btnLeft.addEventListener('click', function() {

    currentPosition--;

    if(currentPosition < 0) {
        currentPosition = 2;
    }

    sliderWindow.style.transform = 'translate(-256px, 0px)';

    setTimeout(function(){
        sliderWindow.src = imgs[currentPosition];
        sliderWindow.style.transform = 'translate(0px, 0px)';
    }, 1000);
});

btnRight.addEventListener('click', function() {

    currentPosition++;

    if(currentPosition > 2) {
        currentPosition = 0;
    }

    sliderWindow.style.transform = 'translate(-256px, 0px)';

    setTimeout(function(){
        sliderWindow.src = imgs[currentPosition];
        sliderWindow.style.transform = 'translate(0px, 0px)';
    }, 1000);
});
