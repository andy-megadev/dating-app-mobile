import React, { useMemo } from 'react';
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  Text,
  ViewStyle
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { colors } from 'src/theme';
import styles from '../../styles';

interface ICellProps extends PressableProps {
  title: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
}

export const Cell = ({ title, children, style, ...props }: ICellProps) => {
  const cellStyles = useMemo(
    () =>
      ({ pressed }: PressableStateCallbackType) =>
        [
          styles.cell,
          style,
          {
            opacity: pressed ? 0.7 : 1
          }
        ],
    [style]
  );

  return (
    <Pressable style={cellStyles} {...props}>
      <Text style={[styles.textLight, styles.textGender]}>{title}</Text>
      {children ?? (
        <Entypo name="chevron-thin-right" size={20} color={colors.greyMid} />
      )}
    </Pressable>
  );
};
