import React from 'react';
import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { PressableHighlight } from 'src/components';
import { colors } from 'src/theme';
import styles from '../../styles';
import { ITraitsProps } from '../../types';

export const Traits = ({ value, clear }: ITraitsProps) => (
  <View style={styles.intersexTraits}>
    <Text style={[styles.textLight, styles.textGender, styles.textAccent]}>
      {value}
    </Text>
    <PressableHighlight styles={styles.intersexClear} onPress={clear}>
      <Entypo name="circle-with-cross" size={15} color={colors.greyDark} />
    </PressableHighlight>
  </View>
);
