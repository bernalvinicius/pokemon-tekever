import axios from 'axios';

import { getPokemons, getPokeSprites, getPokemonDetails } from './api';

export const GetAllPokemons = async url => {
  const { data } = await getPokemons(url);

  const pokemon = await axios.all(
    data.results.map(pokemon =>
      getPokeSprites(pokemon.url).then(pk => pk.data),
    ),
  );

  return { data: data, pokemon: pokemon };
};

export const GetPokemonDetails = async pokemon => {
  const data = await getPokemonDetails(pokemon);

  return data;
};
