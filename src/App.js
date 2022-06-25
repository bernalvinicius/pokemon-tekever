import React from 'react';

import Routes from './routes';
import { GlobalStyle, Theme } from './theme';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Routes />
    </Theme>
  );
};

export default App;
