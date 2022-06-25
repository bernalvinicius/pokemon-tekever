import React from 'react';

import Routes from 'src/routes';
import { GlobalStyle, Theme } from 'src/theme';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Routes />
    </Theme>
  );
};

export default App;
