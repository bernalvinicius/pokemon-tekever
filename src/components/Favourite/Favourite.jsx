import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from 'src/providers';

import { Favourite as S } from './styles';

const Favourite = () => {
  const { data } = useContext(AppContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const params = useParams();

  /**
   * Checking if the pokemon is in the favorites list or not,
   * according to this information the icon has its color determined
   */
  useEffect(() => {
    const pokemon = params.name;

    const _isFavourite = data?.favourites?.some(
      favourite => favourite?.name === pokemon,
    );

    setIsFavourite(_isFavourite);
  }, [data]);

  return <S.Icon isFavourite={isFavourite} />;
};

export default Favourite;
