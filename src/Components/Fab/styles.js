import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;  

  min-height: 60px;
  min-width: 60px;

  border-radius: 30px;

  elevation: ${({measures:{ITEM}}) => ITEM.ELEVATION};

  background-color: ${({background = '#000'}) => background};
`;