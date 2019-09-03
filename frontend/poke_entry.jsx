import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemons } from './util/api_util';
import { receiveAllPokemons, requestAllPokemons } from './actions/pokemon_actions';
import configureStore from './store/store';
import {selectAllPokemons} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchAllPokemons = fetchAllPokemons;
  window.receiveAllPokemons = receiveAllPokemons;
  window.requestAllPokemons = requestAllPokemons;
  window.selectAllPokemons = selectAllPokemons;


  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});