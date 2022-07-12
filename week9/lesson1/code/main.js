const items = document.getElementsByClassName('wrapper__item');
const secondItem = document.getElementById('wrapper__item-2');
const thirdItem = document.querySelector('.wrapper__item:nth-child(3)');
const pTags = document.getElementsByTagName('p');
const itemQS = document.querySelector('.wrapper__item');
const itemsQS = document.querySelectorAll('.wrapper__item');

// for(let p of pTags) {
//     console.log(p);
// }

// console.log(itemQS);
// console.log(itemsQS);

for(let item of itemsQS) {
    console.log(item);
}

// secondItem.setAttribute("style", "color: white; background-color: coral;");
console.log(secondItem.attributes);

secondItem.style.backgroundColor = "coral";
secondItem.style.color = "white";

secondItem.className += " wrapper__inner_coral";

let toggleThirdItem = true;

thirdItem.onclick = changeColor;

function changeColor() {

    if(toggleThirdItem) {
        thirdItem.style.color = "white";
    } else {
        thirdItem.style.color = "black";
    }

    toggleThirdItem = !toggleThirdItem;
}


