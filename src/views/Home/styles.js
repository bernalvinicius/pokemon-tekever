import styled from 'styled-components';

export const Home = {
  Content: styled.div`
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
  `,

  Container: styled.div`
    max-width: 90%;
  `,

  Pagination: styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 30px;
    padding-bottom: 50px;
  `,

  ContentLabel: styled.div`
    margin: 50px 0;
    display: flex;
    justify-content: center;
    cursor: pointer;
  `,

  Label: styled.span`
    display: block;
    font-size: 35px;
    color: ${props => props.theme.palette.colors.white};
    text-align: initial;
    padding-left: 20px;
    text-transform: capitalize;
    text-decocartion: underline;
  `,
};
