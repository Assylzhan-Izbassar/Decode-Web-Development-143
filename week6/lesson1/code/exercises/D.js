let n = +prompt('Enter a number between 0 and 9');

switch (n) {
    
    case 0:
        console.log('zero');
        break;
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('third');
        break;
    case 4:
        console.log('four');
        break;
    case 5:
        console.log('five');
        break;
    case 6:
        console.log('six');
        break;
    case 7:
        console.log('seven');
        break;
    case 8:
        console.log('eight');
        break;

    case 9:
        console.log('nine');
        break;

    default:
        console.log('Эх, ты не ввел число от 0 до 9');
        break;
}