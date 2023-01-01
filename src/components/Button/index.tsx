import React, { useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';

import globalStyles from 'src/styles';
import { colors, fonts } from 'src/theme';
import { scaleHeight as sh } from 'src/utils';
import { PressableHighlight } from '../PressableHighlight';
import { IButtonProps } from '../types';

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

  return (
    <PressableHighlight
      styles={[globalStyles.center, styles.buttonContainer, style]}
      onPress={onPress}
      {...props}
    >
      {children ? (
        children
      ) : (
        <Text style={[styles.buttonTitle, titleStyle]}>{title}</Text>
      )}
    </PressableHighlight>
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
