import React from 'react';
import PropTypes from 'prop-types';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import { breakpoints } from 'src/utils/breakpoints';

import { defaultTheme } from './defaultTheme';

/**
 * Custom theme with specific colors and breakpoints
 */
const theme = createTheme({
  breakpoints: {
    values: {
      sm: parseInt(Object.keys(breakpoints)[0]),
      md: parseInt(Object.keys(breakpoints)[1]),
      lg: parseInt(Object.keys(breakpoints)[2]),
    },
  },
  palette: defaultTheme,
});

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
