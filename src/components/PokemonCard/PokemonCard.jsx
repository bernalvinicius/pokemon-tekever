import React from 'react';
import PropTypes from 'prop-types';

import { AppContext } from 'src/providers';

import { PokemonCard as S } from './styles';

const PokemonCard = ({ name, cover }) => {
  const { data } = React.useContext(AppContext);

  console.log('dataaaa:: ', data);

  return (
    <S.Grid item lg={3} md={4} sm={6} xs={12}>
      <S.Content>
        <S.Cover>
          <img src={cover} alt={name} />
        </S.Cover>
        <S.Label>
          <span>{name}</span>
        </S.Label>
      </S.Content>
    </S.Grid>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
  cover: PropTypes.string,
};

export default PokemonCard;
