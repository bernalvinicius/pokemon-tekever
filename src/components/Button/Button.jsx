import React from 'react';
import PropTypes from 'prop-types';

import { Button as S } from './styles';

const Button = ({ disabled, onClick, children }) => {
  return (
    <S.Container disabled={disabled} onClick={onClick}>
      {children}
    </S.Container>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
