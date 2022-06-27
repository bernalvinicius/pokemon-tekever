import React from 'react';

import { AppProvider } from 'src/providers';
import App from './App';

const Root = () => {
  /**
   * Application state management is done with `Context API`.
   */
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default Root;
