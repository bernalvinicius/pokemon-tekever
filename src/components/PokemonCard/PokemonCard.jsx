import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { PokemonCard as S } from './styles';

const PokemonCard = ({ name, cover }) => {
  /**
   * Rendering the list of pokemons with name and image
   */
  return (
    <S.Grid item lg={3} md={4} sm={6} xs={12}>
      <Link
        to={{
          pathname: `/pokemon/${name}`,
        }}
      >
        <S.Content>
          <S.Cover>
            <img src={cover} alt={name} />
          </S.Cover>
          <S.Label>
            <span>{name}</span>
          </S.Label>
        </S.Content>
      </Link>
    </S.Grid>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
  cover: PropTypes.string,
};

export default PokemonCard;
