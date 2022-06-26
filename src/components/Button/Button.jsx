import React from 'react';
import PropTypes from 'prop-types';

import { Button as S } from './styles';

const Button = ({ onClick, children, ...rest }) => {
  return (
    <S.Container {...rest} onClick={onClick}>
      {children}
    </S.Container>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
