import React, { useMemo } from 'react';
import {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle
} from 'react-native';

import globalStyles from '../../styles';
import { colors, fonts } from '../../theme';
import { IButtonProps } from './types';

const Button = ({
  backgroundColor,
  borderColor,
  children,
  style,
  title,
  onPress,
  ...props
}: IButtonProps) => {
  const styles = useMemo(
    () => getStyles(backgroundColor, borderColor),
    [borderColor, backgroundColor]
  );

  const buttonStyles = useMemo(
    () =>
      ({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> =>
        [
          { opacity: pressed ? 0.8 : 1 },
          globalStyles.center,
          styles.buttonContainer,
          style
        ],
    [styles, globalStyles, style]
  );

  return (
    <Pressable style={buttonStyles} onPress={onPress} {...props}>
      {children ? children : <Text style={styles.buttonTitle}>{title}</Text>}
    </Pressable>
  );
};

const getStyles = (
  backgroundColor = colors.primary,
  borderColor = colors.accent
) =>
  StyleSheet.create({
    buttonContainer: {
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderRadius: 40,
      borderWidth: 1,
      paddingVertical: 10,
      width: '100%'
    },
    buttonTitle: {
      color: borderColor,
      fontFamily: 'Rubik-Medium',
      fontSize: fonts.xviii
    }
  });

export default Button;
