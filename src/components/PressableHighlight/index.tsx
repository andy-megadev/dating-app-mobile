import React from 'react';
import { Pressable } from 'react-native';

import { IPressableHighlightProps } from '../types';

export const PressableHighlight = ({
  children,
  styles,
  ...props
}: IPressableHighlightProps) => {
  const style: IPressableHighlightProps['style'] = ({ pressed }) => [
    { opacity: pressed ? 0.7 : 1 },
    styles
  ];

  return (
    <Pressable style={style} {...props}>
      {children}
    </Pressable>
  );
};
