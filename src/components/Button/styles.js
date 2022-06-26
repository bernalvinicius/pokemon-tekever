import styled from 'styled-components';

export const Button = {
  Container: styled.button`
    background-color: ${props => props.theme.palette.colors.pink};
    border: none;
    border-radius: 0.5rem;
    color: ${props => props.theme.palette.colors.white};
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    font-size: 1.8rem;
    height: 55px;
    padding: 0;
    outline: none;
    overflow: hidden;
    text-decoration: none;
    width: 300px;

    &:first-letter {
      text-transform: uppercase;
    }

    &:hover {
      filter: brightness(110%);
    }
  `,
};
