import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Animated} from 'react-native';

import Fab from '../Fab';

import {Container, Icon} from './styles';

const {Value, View} = Animated;

function FloatingNav({visible = false}) {
  const [show, setShow] = useState(true);
  const animation = useRef(new Value(0)).current;

  const transition = (toValue) => 
    Animated.timing(animation, {toValue, useNativeDriver: true, duration: 300}).start(); 

  useEffect(() => {
    transition(visible ? 0 : 200);
  },[visible])

  return(
    <Container>
      <View style={[{transform: [{translateY: animation}]}]}>
        <Fab><Icon name='menu' color='#fff' /></Fab>
      </View>
      <View style={[{transform: [{translateY: animation}]}]}>
        <Fab><Icon name='plus' color='#fff' /></Fab>
      </View>
    </Container>
  )
};

export default FloatingNav;