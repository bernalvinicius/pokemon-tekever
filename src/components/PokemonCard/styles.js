import styled from 'styled-components';
import { Grid as _Grid } from '@material-ui/core';

export const PokemonCard = {
  Grid: styled(_Grid)`
    && {
      display: flex;
      justify-content: center;
    }
  `,

  Content: styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: splace-between;
    align-items: center;
    width: 100%;
    max-width: 300px;
  `,

  Cover: styled.div`
    width: 100%;
    max-width: 120px;
    flex: 1 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.palette.colors.white};
    border-radius: 50%;
    padding: 10px;
  `,

  Label: styled.div`
    flex: 1 0;

    span {
      display: block;
      font-size: 24px;
      color: ${props => props.theme.palette.colors.white};
      text-align: initial;
      padding-left: 20px;
      text-transform: capitalize;
    }
  `,
};
