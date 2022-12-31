import React from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';

interface IPressableHighlightProps extends PressableProps {
  styles?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
  style?: PressableProps['style'] | StyleProp<ViewStyle>[];
}

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
