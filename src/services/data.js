import axios from 'axios';

import { getPokemons, getPokeSprites, getPokemonDetails } from './api';

/**
 * Getting the entire pokemon list, then making a second call to bring
 * up more details from pokemon list
 */
export const GetAllPokemons = async url => {
  const { data } = await getPokemons(url);

  const pokemon = await axios.all(
    data.results.map(pokemon =>
      getPokeSprites(pokemon.url).then(pk => pk.data),
    ),
  );

  return { data: data, pokemon: pokemon };
};

/**
 * Getting almost all the characteristics of pokemon
 */
export const GetPokemonDetails = async pokemon => {
  const data = await getPokemonDetails(pokemon);

  return data;
};
