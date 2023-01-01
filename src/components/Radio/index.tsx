import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from 'src/theme';
import { scale as s, scaleHeight as sh } from 'src/utils';
import { PressableHighlight } from '../PressableHighlight';
import { IRadioProps } from '../types';

export const Radio = ({
  containerStyle,
  value,
  size,
  style,
  options,
  onPress,
  onOptionChosen,
  ...props
}: IRadioProps) => {
  const styles = useMemo(() => getStyles(size), [size]);

  const handleRadioPress: IRadioProps['onOptionChosen'] = (value) => {
    onOptionChosen(value);
  };

  return (
    <>
      {options.map((option) => (
        <PressableHighlight
          key={option.title}
          styles={[styles.radioContainer, containerStyle]}
          onPress={() => handleRadioPress(option.value)}
          {...props}
        >
          <View style={[styles.radio, style]}>
            <View
              style={[
                styles.radioInner,
                {
                  backgroundColor:
                    value === option.value ? colors.accent : colors.primary
                }
              ]}
            />
          </View>
          <Text style={styles.text}>{option.title}</Text>
        </PressableHighlight>
      ))}
    </>
  );
};

const getStyles = (size = 25) =>
  StyleSheet.create({
    radio: {
      backgroundColor: colors.primary,
      borderColor: colors.accent,
      borderRadius: s(size) / 2,
      borderWidth: 1,
      marginRight: s(15),
      padding: 3,
      width: s(size),
      height: s(size)
    },
    radioContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: s(15),
      paddingVertical: sh(15)
    },
    radioInner: {
      flex: 1,
      borderRadius: s(size) / 2
    },
    text: {
      fontFamily: 'Rubik-Light',
      fontSize: fonts.xviii
    }
  });
