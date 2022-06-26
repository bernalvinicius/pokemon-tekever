import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';

import { Layout, PokemonCard } from 'src/components';
import { getPokemons, getPokeSprites } from 'src/services/api';

import { Home as S } from './styles';

const Home = () => {
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    const getAllPokemons = async () => {
      const { data } = await getPokemons();
      const pokemon = await axios.all(
        data.results.map(pokemon =>
          getPokeSprites(pokemon.url).then(pk => pk.data),
        ),
      );

      setPokemons(pokemon);
    };

    getAllPokemons();
  }, []);

  return (
    <Layout>
      <S.Content>
        <S.Container>
          <Grid container spacing={4}>
            {pokemons.map(pokemon => (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                cover={pokemon.sprites.front_default}
              />
            ))}
          </Grid>
        </S.Container>
      </S.Content>
    </Layout>
  );
};

export default Home;
