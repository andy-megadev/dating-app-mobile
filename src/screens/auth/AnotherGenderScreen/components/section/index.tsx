import React from 'react';
import { Text, View } from 'react-native';

import styles from '../../styles';
import { ISectionProps } from '../../types';

export const Section = ({ children, title, style }: ISectionProps) => {
  return (
    <>
      <Text style={[styles.textRegular, styles.sectionTitle]}>{title}</Text>
      <View style={[styles.sectionContainer, style]}>{children}</View>
    </>
  );
};
