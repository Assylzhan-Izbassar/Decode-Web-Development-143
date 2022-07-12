window.onload = () => {

    const input = document.querySelector('.to-do__field input');
    const button = document.querySelector('.to-do__field button');

    const list = document.querySelector('.to-do__list');
    const error = document.querySelector('.error');

    button.addEventListener('click', function() {

        if(validateInput(input.value)) {
            list.append(createListItem(input.value));
            error.style.display = "none";

            updateItems();

        } else {
            error.style.display = "block";
        }

        input.value = "";
    });
};

function updateItems() {
    items = document.querySelectorAll('.to-do__item');

    for(let item of items) {
        item.addEventListener('click', function() {
            if(item.children[1].checked) {
                item.children[0].style.textDecoration = "line-through";
            } else {
                item.children[0].style.textDecoration = "none";
            }
        });
    }
}

function validateInput(content) {
    let result = true;

    content.replace(" ", "");
    content.trim();

    if(!content || content.length < 8) {
        result = false;
    }

    return result;
}

function createListItem(content) {

    const div = document.createElement('div');
    div.className = 'to-do__item';


    const li = document.createElement('li');
    li.innerText = content;

    const input = document.createElement('input');
    input.type = "checkbox";

    div.append(li);
    div.append(input);

    return div;
}