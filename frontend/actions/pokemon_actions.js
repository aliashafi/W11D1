export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
import * as APIUtil from '../util/api_util';


export const receiveAllPokemons = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const requestAllPokemons = () => (dispatch) => (
  APIUtil.fetchAllPokemons()
    .then(pokemon => dispatch(receiveAllPokemons(pokemon)))
);