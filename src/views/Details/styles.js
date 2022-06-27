import styled from 'styled-components';

export const Details = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  `,

  Content: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 75%;
    margin 10% 0;
  `,

  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,

  Label: styled.span`
    color: ${props => props.theme.palette.colors.white};
    font-size: 20px;
    text-transform: capitalize;
    display: block;
  `,

  Cover: styled.div`
    width: 100%;
    max-width: 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.palette.colors.white};
    border-radius: 50%;
    padding: 10px;
    margin: 15px;
  `,

  Description: styled.span`
    color: ${props => props.theme.palette.colors.white};
    font-size: 16px;
    text-transform: capitalize;
    display: block;
    padding-bottom: 10px;
    text-align: end;
  `,

  Card: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ${({ center }) => (!center ? 'baseline' : 'center')};
    width: 200px;
    padding: ${({ stats }) => (!stats ? '10px 0' : '5px 0')};
  `,
};
