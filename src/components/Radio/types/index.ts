import { PressableProps, ViewStyle } from 'react-native';

export interface IRadioProps extends PressableProps {
  options: string[];
  onOptionChosen: (value: string, index: number) => void;
  containerStyle?: ViewStyle | ViewStyle[];
  size?: number;
  style?: ViewStyle | ViewStyle[];
}
