import { PressableProps, TextStyle, ViewStyle } from 'react-native';

export interface IButtonProps extends PressableProps {
  backgroundColor?: string;
  borderColor?: string;
  style?: ViewStyle | ViewStyle[];
  title?: string;
}
