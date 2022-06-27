import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import { Layout, Loader, PokemonCard } from 'src/components';
import { AppContext } from 'src/providers';
import back from 'src/assets/back.svg';

import { ListFavourites as S } from './styles';

const ListFavourites = () => {
  const { data } = useContext(AppContext);
  const history = useNavigate();

  /**
   * Back to the previous page
   */
  const handleBack = () => {
    history(-1);
  };

  /**
   * Rendering the list of pokemons from local storage with name and image
   */
  return (
    <Layout>
      <S.Content>
        {data.loading && <Loader />}
        {!data.loading && data.favourites && (
          <S.Container>
            <S.Back onClick={handleBack}>
              <img src={back} alt="back" />
              <S.Label>Back</S.Label>
            </S.Back>
            <Grid container spacing={4}>
              {data.favourites.map(pokemon => (
                <PokemonCard
                  key={pokemon.id}
                  name={pokemon.name}
                  cover={pokemon.sprite}
                />
              ))}
            </Grid>
          </S.Container>
        )}
      </S.Content>
    </Layout>
  );
};

export default ListFavourites;
