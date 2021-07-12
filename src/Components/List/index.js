import React from 'react';
import useTheme from '../../Hooks/useTheme';

import Types from './Types';

function List({type = '', loading, ...props}) {
  const theme = useTheme();
  const RenderItem = Types[type] ?? Types.default;

  return <RenderItem {...props} {...{theme}} />;
};

export default List;