import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Animated} from 'react-native';

import Fab from '../Fab';

import {Container, Icon} from './styles';

const {Value, View} = Animated;

function FloatingNav({visible = false, onMenu, onPlus}) {
  const [show, setShow] = useState(visible);
  const animation = useRef(new Value(0)).current;
  const timingRef = useRef(null);

  const transition = (toValue) => 
    Animated.timing(animation, {toValue, useNativeDriver: true, duration: 300}).start(); 

  useEffect(() => {
    transition(visible ? 0 : 200);
    timingRef.current = setTimeout(() => setShow(visible), visible ? 1 : 400);
    return () => {
      clearTimeout(timingRef.current);
    }
  },[visible])

  return show ? (
    <Container>
      <View style={[{transform: [{translateY: animation}]}]}>
        <Fab onPress={onMenu}><Icon name='menu' color='#fff' /></Fab>
      </View>
      <View style={[{transform: [{translateY: animation}]}]}>
        <Fab onPress={onPlus}><Icon name='plus' color='#fff' /></Fab>
      </View>
    </Container>
  ) : null
};

export default FloatingNav;