import * as types from './types';

export const fetchHeroes = () => ({
  type: types.GET_HEROS,
});

export const addHero = payload => ({
  type: types.ADD_HERO,
  payload,
});
