import React from 'react';

import {Container} from './styles';

import useTheme from '../../Hooks/useTheme';

export default Fab = ({children}) => {
  const theme = useTheme();
  return (
    <Container {...theme}>
      {children}
    </Container>
  );
}
