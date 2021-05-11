import React, {useCallback, useEffect, useRef, useState} from 'react';

import {Animated} from 'react-native';

import styled from 'styled-components/native';

const {Value, View} = Animated;

function RadioColorType({color: colorName = '', checked = false, onChange = () => undefined, theme, onPress}) {
  // const [value, setValue] = useState(checked);
  const scale = useRef(new Value(1)).current;
  const color = theme.colors.ITEMS[colorName] ?? theme.colors.ITEMS.WHITE;

  console.log('color', color)

  const transition = (toValue) => 
    Animated.timing(
      scale,
      {
        toValue,
        useNativeDriver: true,
        duration: 200
      }
    ).start();

  const handlePress = useCallback(() => {
    if(onPress) onPress();
  },[onPress]);

  const handleChange = useCallback((value) => {
    if(onChange)onChange();
  },[onChange])
  
  useEffect(() => {
    transition(checked ? 0.7 : 1);
    handleChange();
  }, [checked])
  
  return(
    <Container onPress={handlePress}>
      <View style={[{borderRadius: 20, backgroundColor: color, height: '100%', width: '100%'}, {transform:[{scale}]}]} />
    </Container>
  )
};

const Container = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  border-radius: 25px;

  background-color: #000;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default RadioColorType;