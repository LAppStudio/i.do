import React from 'react';

import Card from '../../../../Components/Card';

import styled from 'styled-components/native';
import Button from '../../../../Components/Button';

function ToDoForm({onSubmit}) {
  return(
    <Container>
      <Card>
        <Button onPress={onSubmit} title='CREATE' />
      </Card>
    </Container>
  )
}

const Container = styled.View`
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`;

export default ToDoForm;