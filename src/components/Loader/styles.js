import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = {
  Container: styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Content: styled.div`
    --white: ${props => props.theme.palette.colors.white};

    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 2px solid var(--white);
    border-right: 2px solid var(--white);
    border-bottom: 2px solid var(--white);
    border-left: 4px solid var(--white);
    background: transparent;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  `,
};
