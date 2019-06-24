// Step-2: Define our Action Types
export const SLIP_ON_BANANA = 'SLIP_ON_BANANA';
export const WATCH_THE_NEWS = 'WATCH_THE_NEWS';
export const WIN_THE_LOTTERY = 'WIN_THE_LOTTERY';
export const ADD_FRIEND = 'ADD_FRIEND';

// Step-3: Define our Action Creators
export function slipOnBanana() {
    return { type: SLIP_ON_BANANA };
}

export function watchNews() {
    return { type: WATCH_THE_NEWS };
}

export function winLottery() {
    return { type: WIN_THE_LOTTERY };
}

export function addFriend(newFriend) {
    return { 
        type: ADD_FRIEND,
        payload: newFriend
    };
}