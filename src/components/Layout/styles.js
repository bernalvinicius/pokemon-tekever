import styled from 'styled-components';

import cover from 'src/assets/bg.png';
import coverMd from 'src/assets/bg@2x.png';
import coverLg from 'src/assets/bg@3x.png';

export const Layout = {
  Content: styled.div`
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    overflow-y: auto;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }

    ${props => props.theme.breakpoints.down('sm')} {
      background-image: url(${cover});
    }

    ${props => props.theme.breakpoints.up('md')} {
      background-image: url(${coverMd});
    }

    ${props => props.theme.breakpoints.up('lg')} {
      background-image: url(${coverLg});
    }
  `,
};
