const inputValue = document.querySelector('.input input');
const button = document.querySelector('.input button');
const list = document.querySelector('.list');

button.addEventListener('click', add);

function add() {
    createListItem(inputValue.value);
}

function createListItem(taskText) {
    let li = document.createElement('li');
    li.textContent = taskText;
    list.append(li);

    inputValue.value = "";
}