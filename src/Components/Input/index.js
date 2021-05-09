import React from 'react';

import Types from './Types';

import useTheme from '../../Hooks/useTheme';

function Input({type, ...props}) {
  const theme = useTheme();
  const RenderItem = Types[type] ?? Types.default;

  return <RenderItem {...props} {...{theme}} />;
};

export default Input;