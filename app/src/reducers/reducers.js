// Step-4: Create Reducers
import {
    SLIP_ON_BANANA,
    WATCH_THE_NEWS,
    WIN_THE_LOTTERY
} from '../actions/actions';

// One reducer per slice of state.
export function mentalHealthReducer(sliceOfState = 100, action) {
    if (action.type === WATCH_THE_NEWS) {
        return sliceOfState - 10;
    }
    if (action.type === WIN_THE_LOTTERY) {
        return sliceOfState + 50;
    }
    return sliceOfState;
}

export function physicalHealthReducer(sliceOfState = 150, action) {
    if (action.type === SLIP_ON_BANANA) {
        return sliceOfState - 10;
    }
    if (action.type === WIN_THE_LOTTERY) {
        return sliceOfState + 5;
    }
    return sliceOfState;
}