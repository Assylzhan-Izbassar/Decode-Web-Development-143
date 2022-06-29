let cnt = 0;

function changeColor() {
    let btn = document.getElementsByClassName('box')[0];
    console.log('I am here!');
    if(cnt % 2 == 0) {
        btn.style.color = 'yellow';
    } else {
        btn.style.color = 'black';
    }

    cnt++;
}
