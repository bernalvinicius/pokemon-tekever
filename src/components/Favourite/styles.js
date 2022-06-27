import styled from 'styled-components';
import { ReactComponent as FavouriteIcon } from 'src/assets/favourite.svg';

export const Favourite = {
  Icon: styled(FavouriteIcon)`
    width: 50px;
    fill: ${({ isFavourite }) => (!isFavourite ? '#ccc' : '#f47171')};
    cursor: pointer;
  `,
};
