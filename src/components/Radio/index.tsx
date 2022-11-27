import React, { useMemo, useState } from 'react';
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
  size,
  style,
  options,
  onPress,
  onOptionChosen,
  ...props
}: IRadioProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const styles = useMemo(() => getStyles(size), [size]);

  const radioStyles = useMemo(
    () =>
      ({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> =>
        [{ opacity: pressed ? 0.7 : 1 }, styles.radioContainer, containerStyle],
    [styles, containerStyle]
  );

  const handleRadioPress = (value: string, index: number) => {
    setActiveIndex(index);
    onOptionChosen(value, index);
  };

  return (
    <>
      {options.map((option, index) => (
        <Pressable
          key={option}
          style={radioStyles}
          onPress={() => handleRadioPress(option, index)}
          {...props}
        >
          <View style={[styles.radio, style]}>
            <View
              style={[
                styles.radioInner,
                {
                  backgroundColor:
                    index === activeIndex ? colors.accent : colors.primary
                }
              ]}
            />
          </View>
          <Text style={styles.text}>{option}</Text>
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
