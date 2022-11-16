import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import globalStyles from '../../styles';
import { colors } from '../../theme';

interface IButtonProps {
  children: JSX.Element;
  onPress: () => void;
  backgroundColor?: string;
  borderColor?: string;
  containerStyle?: ViewStyle;
}

const Button = ({
  children,
  containerStyle,
  onPress,
  backgroundColor = colors.primary,
  borderColor = colors.accent
}: IButtonProps) => {
  const styles = getStyles(borderColor, backgroundColor);

  return (
    <Pressable
      style={[globalStyles.center, styles.buttonContainer, containerStyle]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

const getStyles = (borderColor: string, backgroundColor: string) =>
  StyleSheet.create({
    buttonContainer: {
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderRadius: 40,
      borderWidth: 1,
      paddingVertical: 10,
      width: '100%'
    }
  });

export default Button;
