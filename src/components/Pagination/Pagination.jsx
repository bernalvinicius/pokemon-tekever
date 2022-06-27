import React, { useContext } from 'react';

import Button from '../Button';
import { AppContext } from 'src/providers';
import { GetAllPokemons } from 'src/services/data';

import { Pagination as S } from './styles';

const Pagination = () => {
  const { data, setData } = useContext(AppContext);

  /**
   * Getting a new list of pokemons
   */
  const getPokemons = async url => {
    const { data, pokemon } = await GetAllPokemons(url);

    setData(prev => ({
      ...prev,
      pokemons: data,
      types: pokemon,
    }));
  };

  /**
   * If the next page variable has some value set, then the user can go to the next page.
   */
  const onNext = data => {
    const url = data?.pokemons?.next && data?.pokemons?.next;
    getPokemons(url);
  };

  /**
   * If the previous page variable has some value configured, then the user can go to the previous page.
   */
  const onPrevious = data => {
    const url = data?.pokemons?.previous && data?.pokemons?.previous;
    getPokemons(url);
  };

  /**
   * Every time a page change is made, a new list of pokemons is created.
   */
  React.useEffect(() => {
    getPokemons();
  }, []);

  return (
    <S.Container>
      <S.Content>
        <Button
          disabled={!data?.pokemons?.previous}
          onClick={() => onPrevious(data)}
        >
          previous
        </Button>
        <Button disabled={!data?.pokemons?.next} onClick={() => onNext(data)}>
          next
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default Pagination;
