import { PressableProps, ViewStyle } from 'react-native';

export interface IButtonProps extends PressableProps {
  backgroundColor?: string;
  borderColor?: string;
  style?: ViewStyle;
  title?: string;
}

export interface IButtonStyles {
  buttonContainer: ViewStyle;
  buttonTitle: ViewStyle;
}
