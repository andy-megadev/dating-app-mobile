import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { colors } from 'src/theme';
import styles from '../../styles';

interface ITraitsProps {
  value: string;
  clear: () => void;
}

export const Traits = ({ value, clear }: ITraitsProps) => (
  <View style={styles.intersexTraits}>
    <Text style={[styles.textLight, styles.textGender, styles.textAccent]}>
      {value}
    </Text>
    <Pressable
      style={({ pressed }) => [
        styles.intersexClear,
        { opacity: pressed ? 0.7 : 1 }
      ]}
      onPress={clear}
    >
      <Entypo name="circle-with-cross" size={15} color={colors.greyDark} />
    </Pressable>
  </View>
);
