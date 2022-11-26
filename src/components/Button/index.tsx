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
// import globalStyles from '@styles';
// import { colors, fonts } from '../../theme';
import { colors, fonts } from 'src/theme';
import { IButtonProps } from './types';
import { scaleHeight as sh } from '../../utils';
// import { scaleHeight as sh } from '@utils';

export const Button = ({
  backgroundColor,
  borderColor,
  children,
  isTextButton,
  style,
  title,
  titleStyle,
  onPress,
  ...props
}: IButtonProps) => {
  const styles = useMemo(
    () => getStyles(backgroundColor, borderColor, isTextButton),
    [borderColor, backgroundColor, isTextButton]
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
      {children ? (
        children
      ) : (
        <Text style={[styles.buttonTitle, titleStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};

const getStyles = (
  backgroundColor = colors.primary,
  borderColor = colors.accent,
  isTextButton = false
) =>
  StyleSheet.create({
    buttonContainer: isTextButton
      ? { width: 'auto' }
      : {
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderRadius: 40,
          borderWidth: 1,
          paddingVertical: sh(15),
          width: '100%'
        },
    buttonTitle: {
      color: isTextButton ? colors.accent : borderColor,
      fontFamily: 'Rubik-Medium',
      fontSize: isTextButton ? fonts.xvi : fonts.xviii
    }
  });
