import { isDigit } from "./rules.js";

const state = {
    Zero: 0,
    Accumulate: 1,
    Compute: 2,
    Equal: 3,
    Error: 4,
    Clear: 5
};

let currentState = state.Zero;
export let prevNumber = "";
export let number = "";
export let operator = "";

export function process(text) {

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
        case state.Clear:
            break;
        case state.Equal:
            EqualState();
            break;
        case state.Error:
            break;
    }
}

function ZeroState(msg) {
    currentState = state.Accumulate;
    process(msg);
}

function AccumulateState(msg) {
    if(isDigit(msg)) {
        number += msg;
    } else {
        currentState = state.Compute;
        process(msg);
        prevNumber = number;
    }
}

function ComputeState(msg) {
    if(isDigit(msg)) {
        number = "";
        number += msg;
        currentState = state.Accumulate;
    } else {
        if(prevNumber.length > 0) {
            Compute();
            number = prevNumber;
        }
        operator = msg;
    }
}

function EqualState() {
    Compute();
    number = prevNumber;
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