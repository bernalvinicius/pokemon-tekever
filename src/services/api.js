import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = () => axios.get(`${BASE_URL}/pokemon`);

export const getPokeSprites = url => axios.get(url);
