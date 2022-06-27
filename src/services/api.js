import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = (url = BASE_URL) => axios.get(url);

export const getPokeSprites = url => axios.get(url);

export const getPokemonDetails = pokemon => axios.get(`${BASE_URL}/${pokemon}`);
