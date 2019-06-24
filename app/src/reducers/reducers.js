import { 
  WATCH_THE_NEWS, 
  WIN_LOTTERY, 
  SLIP_ON_BANANA, 
  ADD_FRIEND
} from '../actions/actions';

export function mentalHealthReducer(sliceOfState = 100, action) {
  if (action.type === WATCH_THE_NEWS) {
    return sliceOfState - 30;
  }
  if (action.type === WIN_LOTTERY) {
    return sliceOfState + 50;
  }
  return sliceOfState;
}

export function physicalHealthReducer(sliceOfState = 150, action) {
  if (action.type === SLIP_ON_BANANA) {
    return sliceOfState - 30;
  }
  if (action.type === WIN_LOTTERY) {
    return sliceOfState + 20;
  }
  return sliceOfState;
}

export function friendsReducer(sliceOfState = [], action) {
  if (action.type === ADD_FRIEND) {
    return [...sliceOfState, action.payload];
  }
  return sliceOfState;
};