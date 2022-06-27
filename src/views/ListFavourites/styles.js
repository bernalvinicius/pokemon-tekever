import styled from 'styled-components';

export const ListFavourites = {
  Content: styled.div`
    height: 100%;
  `,

  Container: styled.div`
    max-width: 90%;
  `,

  Back: styled.div`
    width: 200px;
    margin: 50px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  `,

  Label: styled.span`
    color: ${props => props.theme.palette.colors.white};
    font-size: 20px;
    text-transform: capitalize;
  `,
};
