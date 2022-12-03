import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

import styles from '../../styles';

interface ISectionProps {
  children: React.ReactNode;
  title: string;
  style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
}

export const Section = ({ children, title, style }: ISectionProps) => {
  return (
    <>
      <Text style={[styles.textRegular, styles.sectionTitle]}>{title}</Text>
      <View style={[styles.sectionContainer, style]}>{children}</View>
    </>
  );
};
