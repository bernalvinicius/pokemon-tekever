import React from 'react';

import Routes from 'src/routes';
import { GlobalStyle, Theme } from 'src/theme';

const App = () => {
  /**
   * A custom theme was created together with Material-UI
   * As few pages were created, routing is done with `react-router-dom`.
   * GlobalStyle to reset all predetermined CSS settings
   */
  return (
    <Theme>
      <GlobalStyle />
      <Routes />
    </Theme>
  );
};

export default App;
