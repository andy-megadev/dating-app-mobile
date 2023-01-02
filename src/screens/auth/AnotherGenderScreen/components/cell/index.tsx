import React from 'react';
import { Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { PressableHighlight } from 'src/components';
import { colors } from 'src/theme';
import styles from '../../styles';
import { ICellProps } from '../../types';

export const Cell = ({ title, children, style, ...props }: ICellProps) => (
  <PressableHighlight styles={[styles.cell, style]} {...props}>
    <Text style={[styles.textLight, styles.textGender]}>{title}</Text>
    {children ?? (
      <Entypo name="chevron-thin-right" size={20} color={colors.greyMid} />
    )}
  </PressableHighlight>
);
