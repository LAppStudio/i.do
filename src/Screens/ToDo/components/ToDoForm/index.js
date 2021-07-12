import React, { useCallback, useState } from 'react';

import Card from '../../../../Components/Card';
import styled from 'styled-components/native';
import Button from '../../../../Components/Button';
import ColorSelector from '../../../../Components/ColorSelector';
import Input from '../../../../Components/Input';

import useTheme from '../../../../Hooks/useTheme';

const INITIAL_VALUE = {
  title: '',
  color: 'WHITE',
};

function ToDoForm({onSubmit, onDismiss}) {
  const {colors} = useTheme();
  const [forms, setForms] = useState(INITIAL_VALUE);

  const handleFormsChange = (key, value) => {
    setForms((oldForms) => ({...oldForms, [key]: value}));
  }

  const handleSubmit = useCallback(() => {
    onSubmit(forms);
  },[onSubmit, forms]);

  return(
    <Container>
      <Card>
        <Content>
          <InputSection>
            <FieldContainer>
              <Input type='text' placeholder='Title' value={forms['title']} onChange={(value) => handleFormsChange('title', value)} />
            </FieldContainer>
            <FieldContainer>
              <ColorSelector value={forms['color']} onChange={(value) => handleFormsChange('color', value)} />
            </FieldContainer>
          </InputSection>
          <BottomContainer>
            <CancelView>
              <Button onPress={onDismiss} title='CANCEL' />
            </CancelView>
            <SubmitView>
              <Button onPress={handleSubmit} title='CREATE' backgroundColor={colors.PRIMARY} textColor={colors.BACKGROUND} />
            </SubmitView>
          </BottomContainer>
        </Content>
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

const Content = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 800px;
`;

const InputSection = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FieldContainer = styled.View`
  flexDirection: row;
  align-items: center;
  padding-bottom: 10px;
`;

const BottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CancelView = styled.View`
  flex: 1;
  padding-right: 10px;
`;

const SubmitView = styled.View`
  flex: 2;
`;

export default ToDoForm;