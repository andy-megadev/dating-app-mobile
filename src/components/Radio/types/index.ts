import { PressableProps, ViewStyle } from 'react-native';

type IRadioValue = string | number | boolean;

interface IRadioOption {
  title: string;
  value: IRadioValue;
}

export interface IRadioProps extends PressableProps {
  value: IRadioValue;
  options: IRadioOption[];
  onOptionChosen: (value: IRadioValue) => void;
  containerStyle?: ViewStyle | ViewStyle[];
  size?: number;
  style?: ViewStyle | ViewStyle[];
}
