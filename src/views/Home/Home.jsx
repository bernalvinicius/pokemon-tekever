import React, { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import { Layout, Loader, Pagination, PokemonCard } from 'src/components';
import { AppContext } from 'src/providers';
import { GetAllPokemons } from 'src/services/data';

import { Home as S } from './styles';

const Home = () => {
  const { data, setData } = useContext(AppContext);

  useEffect(() => {
    const getPokemons = async () => {
      setData(prev => ({ ...prev, loading: true }));
      const { data, pokemon } = await GetAllPokemons();

      setData(prev => ({
        ...prev,
        pokemons: data,
        types: pokemon,
        loading: false,
      }));
    };

    getPokemons();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <Layout>
      <S.Content>
        {data.loading && <Loader />}
        {!data.loading && data.types && (
          <S.Container>
            <Grid container spacing={4}>
              {data.types.map(pokemon => (
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
        )}
      </S.Content>
    </Layout>
  );
};

export default Home;
