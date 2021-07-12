import styled from 'styled-components/native';
import AntIcons from 'react-native-vector-icons/Entypo';

export const Container = styled.View`
width: 100%;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  bottom: 0;
`;

export const Icon = styled(AntIcons)`
  font-size: 25px;
`;