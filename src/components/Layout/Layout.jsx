import React from 'react';
import PropTypes from 'prop-types';

import { Layout as S } from './styles';

const Layout = ({ children }) => {
  return <S.Content>{children}</S.Content>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
