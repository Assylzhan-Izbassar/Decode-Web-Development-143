import { isDigit, isClear, nonZeroStart, isDot, isOperation, isEqual } from "./rules.js";

const state = {
    Zero: 0,
    Accumulate: 1,
    Compute: 2,
    Error: 3,
    AccumulateDecimal: 4
};

let currentState = state.Zero;
export let prevNumber = "";
export let number = "0";
export let operator = "";

export function process(text) {

    if(isClear(text)) {
        prevNumber = "";
        number = "0";
        operator = "";
        currentState = state.Zero;
        return;
    }

    switch(currentState) {
        case state.Zero:
            ZeroState(text);
            break;
        case state.Accumulate:
            AccumulateState(text);
            break;
        case state.Compute:
            ComputeState(text);
            break;
        case state.AccumulateDecimal:
            AccumulateDecimalState(text);
            break;
        case state.Error:
            break;
    }
}

function ZeroState(msg) {
    if(isDigit(msg)) {
        currentState = state.Accumulate;
    } else if (isDot(msg)) {
        currentState = state.AccumulateDecimal;
    }
    process(msg);
}

function AccumulateState(msg) {
    if(isDigit(msg)) {
        number += msg;
        number = nonZeroStart(number);
    } else if(isOperation(msg)) {
        currentState = state.Compute;
        process(msg);
        prevNumber = number;
    } else if(isDot(msg)) {
        currentState = state.AccumulateDecimal;
        process(msg);
    } else if (isEqual(msg)) {
        validatePrevNum();
        currentState = state.Compute;
    }
}

function ComputeState(msg) {
    if(isDigit(msg)) {
        number = "";
        number += msg;
        currentState = state.Accumulate;
    }
    else if (isOperation(msg)) {
        validatePrevNum();
        operator = msg;
    }
}

function validatePrevNum() {
    if(prevNumber.length > 0) {
        Compute();
        number = prevNumber;
    }
}

function AccumulateDecimalState(msg) {
    if(isDigit(msg)) {
        number += msg;
    } else if(!isDot(number)) {
        number += msg;
    } else if (isOperation(msg)) {
        currentState = state.Compute;
        process(msg);
        prevNumber = number;
    }
}

function Compute() {
    switch(operator) {
        case '+':
            prevNumber = (+prevNumber + (+number)) + '';
            break;
        case '-':
            prevNumber = (+prevNumber - (+number)) + '';
            break;
        case '/':
            prevNumber = (+prevNumber / (+number)) + '';
            break;
        case '*':
            prevNumber = (+prevNumber * (+number)) + '';
            break;
    }
}

export function setNumber(msg) {
    number = msg;
}