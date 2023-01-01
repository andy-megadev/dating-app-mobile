import { PressableProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IButtonProps extends PressableProps {
  backgroundColor?: string;
  borderColor?: string;
  isTextButton?: boolean;
  style?: ViewStyle | ViewStyle[];
  title?: string;
  titleStyle?: TextStyle | TextStyle[];
}

export interface IPressableHighlightProps extends PressableProps {
  styles?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
  style?: PressableProps['style'] | StyleProp<ViewStyle>[];
}

type IRadioValue = unknown;

interface IRadioOption {
  title: string;
  value: IRadioValue;
}

export interface IRadioProps extends PressableProps {
  value: IRadioValue;
  options: IRadioOption[];
  onOptionChosen: (value: unknown) => void;
  containerStyle?: ViewStyle | ViewStyle[];
  size?: number;
  style?: ViewStyle | ViewStyle[];
}
