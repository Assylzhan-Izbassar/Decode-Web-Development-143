window.onload = () => {
    const box = document.querySelector('.box');

    boxEvents(box);
};

function boxEvents(box) {
    box.onmouseover = () => {
        box.style.border = "1px solid black";
    };

    box.onmouseout = () => {
        box.style.border = "none";
    };
}
