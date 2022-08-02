export function isDigit(text) {
    if(text >= '0' && text <= '9') {
        return true;
    }
    return false;
}

export function isOperation(text) {
    let operations = ['+', '-', '*', '/'];

    if(operations.includes(text)) {
        return true;
    }
    return false;
}

export function isClear(text) {
    if(text == 'C') {
        return true;
    }
    return false;
}

export function nonZeroStart(text) {
    if(text[0] == '0'){
        return text.slice(1, text.length);
    }
    return text;
}

export function isDot(text) {
    if(text.includes('.')) {
        return true;
    }
    return false;
}

export function isEqual(text) {
    if(text == '=') {
        return true;
    }
    return false;
}