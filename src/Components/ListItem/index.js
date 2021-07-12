import React from 'react';

import Types from './Types';

import useTheme from '../../Hooks/useTheme';

export default function ListItem({type, ...props}) {
  const theme = useTheme();
  const RenderItem = Types[type] ?? Types.default;

  return <RenderItem {...props} {...{theme}} />
}