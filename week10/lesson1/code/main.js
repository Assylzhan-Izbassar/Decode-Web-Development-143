import { number, process, setNumber } from "./brain.js";

const btns = document.getElementsByClassName('calc__item');
const window = document.getElementsByClassName('calc__window-inner')[0];
const btnClear = document.querySelector('.calc__window-btn button');

export let interfaceNum = "";

btnClear.addEventListener('click', function() {
    interfaceNum = window.innerHTML;
    let textLength = interfaceNum.length;

    if(textLength == 1) {
        interfaceNum = '0';
    } else {
        interfaceNum = interfaceNum.slice(0, textLength-1);
    }

    setNumber(interfaceNum);
    write(true, "");
});

for(let btn of btns) {
    btn.addEventListener('click', function() {
        write(false, this.innerHTML);
    });
}

function write(isChanged, text) {
    if(!isChanged) {
        process(text);
    }

    window.innerHTML = number;
}

