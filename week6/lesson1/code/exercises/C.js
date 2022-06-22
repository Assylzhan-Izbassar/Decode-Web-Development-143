let x = prompt('Enter the char');

if (x >= 'A' && x <= 'Z') { // Заглавная
    console.log('big');
} else if (x >= 'a' && x <= 'z') { // Строчные
    console.log('SMALL');
} else {
    console.log('Not a letter'); // не буква
}