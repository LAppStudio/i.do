import React, { useCallback, useEffect, useRef, useState } from 'react';

import {Animated} from 'react-native';

const {View, Value} = Animated;

function Modal({visible = false, children}) {
  const [show, setShow] = useState(visible);
  const translateY = useRef(new Value(0)).current;
  const opacity = useRef(new Value(0)).current;
  const timingRef = useRef(null);
  
  const transition = (values = {}) => 
    Animated.parallel([
      Animated.timing(opacity, {toValue: values.opacity, useNativeDriver: true, duration: 250}),
      Animated.timing(translateY, {toValue: values.translateY, useNativeDriver: true, duration: 400}),
    ]).start();

  const handleAnimate = useCallback(() => {
    transition({opacity: visible ? 1 : 0, translateY: visible ? 0 : 1000})
  }, [visible]);



  useEffect(() => {
    handleAnimate();
    timingRef.current = setTimeout(() => setShow(visible), visible ? 1 : 400);
    return () => {
      clearTimeout(timingRef.current);
    }
  }, [visible])


  return show ? (
    <View style={[
      {
        backgroundColor: 'rgba(0,0,0,0.4)',
        height: '100%',
        width: '100%',
        position: 'absolute'
      },
      {opacity}
    ]}>
      <View style={[{transform: [{translateY}]}]}>
        {children}
      </View>
    </View>
  ) : null
};

export default Modal;