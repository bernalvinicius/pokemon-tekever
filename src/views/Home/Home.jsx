import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';

import { Layout, Pagination, PokemonCard } from 'src/components';
import { AppContext } from 'src/providers';
import { GetAllPokemons } from 'src/services/data';

import { Home as S } from './styles';

const Home = () => {
  const { data, setData } = useContext(AppContext);

  React.useEffect(() => {
    const getPokemons = async () => {
      const { data, pokemon } = await GetAllPokemons();

      setData(prev => ({ ...prev, pokemons: data, types: pokemon }));
    };

    getPokemons();
  }, []);

  return (
    <Layout>
      <S.Content>
        <S.Container>
          <Grid container spacing={4}>
            {data.types &&
              data.types.map(pokemon => (
                <PokemonCard
                  key={pokemon.id}
                  name={pokemon.name}
                  cover={pokemon.sprites.front_default}
                />
              ))}
          </Grid>
          <S.Pagination>
            <Pagination />
          </S.Pagination>
        </S.Container>
      </S.Content>
    </Layout>
  );
};

export default Home;
