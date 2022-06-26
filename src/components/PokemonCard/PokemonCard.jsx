import React from 'react';
import PropTypes from 'prop-types';

import { PokemonCard as S } from './styles';

const PokemonCard = ({ name, cover }) => {
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