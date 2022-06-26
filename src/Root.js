import React from 'react';

import { AppProvider } from 'src/providers';
import App from './App';

const Root = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default Root;
