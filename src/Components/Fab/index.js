import React from 'react';

import {Container} from './styles';

import useTheme from '../../Hooks/useTheme';

export default Fab = ({children, onPress}) => {
  const theme = useTheme();
  return (
    <Container {...{onPress}} {...theme}>
      {children}
    </Container>
  );
}
