import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Favourite, Layout, Loader } from 'src/components';
import { AppContext } from 'src/providers';
import { GetPokemonDetails } from 'src/services/data';
import back from 'src/assets/back.svg';

import { Details as S } from './styles';

const Details = () => {
  const { data, setData } = useContext(AppContext);
  const params = useParams();
  const history = useNavigate();

  /**
   * Getting the list of pokemons with details
   */
  useEffect(() => {
    const getPokemonDetails = async () => {
      setData(prev => ({ ...prev, loading: true }));
      const { data } = await GetPokemonDetails(params.name);

      setData(prev => ({
        ...prev,
        details: data,
        loading: false,
      }));
    };

    getPokemonDetails();
  }, []);

  /**
   * Function to check if the pokemon already in the favorites list
   */
  const handleFavourite = pokemon => {
    return data?.favourites?.some(favourite => favourite.name === pokemon.name);
  };

  /**
   * Function to save de pokemon in the local storage as favourite
   */
  const onFavourite = (pokemon, image) => {
    const _favourite = { name: pokemon, sprite: image };

    if (handleFavourite(_favourite)) {
      /**
       * Removing it from the favorites list if the user wishes.
       * If the list is empty then the local storage is an empty array.
       */
      const removeFavourite = data?.favourites.filter(
        el => el.name !== _favourite.name,
      );

      return localStorage.setItem('pokemons', JSON.stringify(removeFavourite));
    }

    const allFavourites = [...data.favourites, _favourite];

    /**
     * Saving the pokemon on local storage
     */
    localStorage.setItem('pokemons', JSON.stringify(allFavourites));
  };

  /**
   * Back to the previous page
   */
  const handleBack = () => {
    history(-1);
  };

  /**
   * Rendering the list of pokemons with many characteristics
   */
  return (
    <Layout>
      {data.loading && <Loader />}
      {!data.loading && data.details && (
        <S.Container>
          <S.Content>
            <S.Wrapper>
              <S.Back onClick={handleBack}>
                <img src={back} alt="back" />
              </S.Back>
              <S.Card center>
                <div>
                  <S.Label>{data?.details?.name}</S.Label>
                </div>
                <div
                  onClick={() =>
                    onFavourite(
                      data?.details?.name,
                      data?.details?.sprites?.front_default,
                    )
                  }
                >
                  <Favourite />
                </div>
              </S.Card>
              <S.Cover>
                <img
                  src={data?.details?.sprites?.front_default}
                  alt={data?.details?.name}
                />
              </S.Cover>
              <S.Card>
                <div>
                  <S.Label>Nº</S.Label>
                </div>
                <div>
                  <S.Description>{data?.details?.id}</S.Description>
                </div>
              </S.Card>
              <S.Card>
                <div>
                  <S.Label>Type:</S.Label>
                </div>
                <div>
                  {data?.details?.types?.map(type => (
                    <S.Description key={type.slot}>
                      {type.type.name}
                    </S.Description>
                  ))}
                </div>
              </S.Card>
              <S.Card>
                <div>
                  <S.Label>Abilities:</S.Label>
                </div>
                <div>
                  {data?.details?.abilities?.map(ability => (
                    <S.Description key={ability.slot}>
                      {ability.ability.name}
                    </S.Description>
                  ))}
                </div>
              </S.Card>
              <S.Card>
                <div>
                  <S.Label>Characteristics:</S.Label>
                </div>
              </S.Card>
              <S.Card>
                <div>
                  {data?.details?.stats?.map(stat => (
                    <S.Card stats key={stat.base_stat}>
                      <div>
                        <S.Description>{stat.stat.name}</S.Description>
                      </div>
                      <div>
                        <S.Description>{stat.base_stat}</S.Description>
                      </div>
                    </S.Card>
                  ))}
                </div>
              </S.Card>
            </S.Wrapper>
          </S.Content>
        </S.Container>
      )}
    </Layout>
  );
};

export default Details;
