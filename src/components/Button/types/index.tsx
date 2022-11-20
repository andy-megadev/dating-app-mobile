import { PressableProps, TextStyle, ViewStyle } from 'react-native';

export interface IButtonProps extends PressableProps {
  backgroundColor?: string;
  borderColor?: string;
  isTextButton?: boolean;
  style?: ViewStyle | ViewStyle[];
  title?: string;
  titleStyle?: TextStyle | TextStyle[];
}
