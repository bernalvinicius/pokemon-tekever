import styled from 'styled-components';

export const Pagination = {
  Container: styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 700px;
  `,

  Content: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    ${props => props.theme.breakpoints.down('sm')} {
      flex-direction: column;
      align-items: center;
      height: 100%;
      min-height: 130px;
    }
  `,
};
