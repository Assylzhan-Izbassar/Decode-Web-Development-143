const calcState = {
    ZeroState: 0,
    AccumulatorState: 1, 
    AccumulatorDecimalState: 2,
    ComputedState: 3,
    ErrorState: 4
};

let currentState = calcState.ZeroState;

function process(text) {
    switch(currentState) {
        case calcState.ZeroState:
            break;
        case calcState.AccumulatorState:
            break;
        case calcState.AccumulatorDecimalState:
            break;
        case calcState.
    }
}