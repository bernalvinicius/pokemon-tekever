import React from 'react';

import Button from '../Button';

import { Pagination as S } from './styles';

const Pagination = () => {
  return (
    <S.Container>
      <S.Content>
        <Button onClick={() => {}}>previous</Button>
        <Button onClick={() => {}}>next</Button>
      </S.Content>
    </S.Container>
  );
};

export default Pagination;
