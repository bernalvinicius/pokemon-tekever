import styled from 'styled-components';

export const Button = {
  Container: styled.button`
    background-color: ${({ disabled }) => (!disabled ? '#f11f76' : '#ccc')};
    border: none;
    border-radius: 0.5rem;
    color: ${props => props.theme.palette.colors.white};
    cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')};
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
      filter: ${({ disabled }) => (!disabled ? 'brightness(110%)' : '')};
    }
  `,
};
