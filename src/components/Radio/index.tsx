import React, { useMemo } from 'react';
import {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from 'react-native';

import { colors, fonts } from 'src/theme';
import { scale as s, scaleHeight as sh } from 'src/utils';
import { IRadioProps } from './types';

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

  const radioStyles = useMemo(
    () =>
      ({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> =>
        [{ opacity: pressed ? 0.7 : 1 }, styles.radioContainer, containerStyle],
    [styles, containerStyle]
  );

  const handleRadioPress: IRadioProps['onOptionChosen'] = (value) => {
    onOptionChosen(value);
  };

  return (
    <>
      {options.map((option) => (
        <Pressable
          key={option.title}
          style={radioStyles}
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
        </Pressable>
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
