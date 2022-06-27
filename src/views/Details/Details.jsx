import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Favourite, Layout, Loader } from 'src/components';
import { AppContext } from 'src/providers';
import { GetPokemonDetails } from 'src/services/data';

import { Details as S } from './styles';

const Details = () => {
  const { data, setData } = useContext(AppContext);
  const params = useParams();

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

  const handleFavourite = pokemon => {
    return data?.favourites?.some(favourite => favourite.name === pokemon.name);
  };

  const onFavourite = (pokemon, image) => {
    const _favourite = { name: pokemon, sprite: image };

    if (handleFavourite(_favourite)) {
      const removeFavourite = data?.favourites.filter(
        el => el.name !== el.name,
      );

      return localStorage.setItem('pokemons', JSON.stringify(removeFavourite));
    }

    const allFavourites = [...data.favourites, _favourite];

    localStorage.setItem('pokemons', JSON.stringify(allFavourites));
  };

  return (
    <Layout>
      {data.loading && <Loader />}
      {!data.loading && data.details && (
        <S.Container>
          <S.Content>
            <S.Wrapper>
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
