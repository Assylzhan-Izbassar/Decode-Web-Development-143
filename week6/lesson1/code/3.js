// камень ножница бумага

let state = prompt('Вводите: {камень, ножница, бумага}');

switch (state) {
    // state === (state == 'камень');
    // state === 1;
    case 'камень': // {  }
        console.log(1);
        break;
    case 'ножница':
        console.log(2);
        break;
    case 'бумага':
        console.log(3);
        break;

    case '1':
        console.log(4);
        break;
    
    default:
        console.log(-1);
        break;
}