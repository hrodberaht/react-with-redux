import * as types from './types';

const initialState = [
  {
    name: 'Batman',
  },
];

const heroes = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HEROS:
      return state;
    case types.ADD_HERO:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default heroes;
