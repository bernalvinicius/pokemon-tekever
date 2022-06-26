import React from 'react';
import PropTypes from 'prop-types';

import { AppContext } from './Context';

const defaultState = {
  favorite: '',
  pokemons: [],
  types: [],
  loading: false,
};

export const AppProvider = ({ children }) => {
  const [data, setData] = React.useState(defaultState);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
