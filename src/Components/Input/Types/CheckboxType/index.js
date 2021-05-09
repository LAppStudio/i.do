import React, { useCallback, useEffect, useRef, useState } from 'react';

import {Animated, TouchableOpacity} from 'react-native';

import styled from 'styled-components/native';

const {Value, View} = Animated;

function Checkbox({checked = false, theme, onChange = () => {}}) {
  const [value, setValue] = useState(checked);
  const animation = useRef(new Value(0)).current;

  const transition = (toValue = 0) => 
    Animated.timing(animation, {toValue, duration: 200, useNativeDriver: true}).start();

  const handlePress = useCallback(() => {
    setValue((lastValue = false) => !lastValue );
  },[]);


  const handleCheck = useCallback((valid) => {
    onChange(valid)
  },[onChange]);

  useEffect(() => {
    handleCheck(value);
    transition(value ? 1 : 0);
    
  }, [value]);

  return(
    <Container {...theme} onPress={handlePress}>
      <View style={[{backgroundColor: "#000", height: '100%', width: '100%', borderRadius: theme.measures.INPUT.BORDER, overflow: 'hidden'}, {transform: [{scale: animation}]}]}  />
    </Container>
  )
};

const Container = styled.TouchableOpacity`
  height: 25px;
  width: 25px;
  border-width: ${({measures: {INPUT}}) => INPUT.BORDER}px;
  border-color: #000;
  border-radius: ${({measures: {INPUT}}) => INPUT.RADIUS}px;
  background-color: ${({colors: {BACKGROUND}}) => BACKGROUND};
  overflow: hidden;
`;

export default Checkbox;
