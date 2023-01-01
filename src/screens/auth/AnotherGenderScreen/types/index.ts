import { Reducer } from 'react';
import { PressableProps, StyleProp, ViewStyle } from 'react-native';

export type IShowTo = 'man' | 'woman';

export const isShowTo = (value: unknown): value is IShowTo => {
  const allowed = ['man', 'woman'];
  return typeof value === 'string' && allowed.includes(value);
};

export interface IAnotherGenderState {
  hasIntersexTraits: boolean | null | undefined;
  identity: string;
  isShowIdentity: boolean;
  showTo: IShowTo;
}

export type IAnotherGenderAction =
  | { type: 'SET_IDENTITY'; payload: string }
  | { type: 'SET_SHOW_TO'; payload: IShowTo }
  | { type: 'SET_INTERSEX_TRAITS'; payload: boolean | null | undefined }
  | { type: 'SET_IS_SHOW_IDENTITY'; payload: boolean }
  | { type: 'RESET' };

export type IAnotherGenderReducer = Reducer<
  IAnotherGenderState,
  IAnotherGenderAction
>;

export interface ICellProps extends PressableProps {
  title: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
}

export interface IHeaderProps {
  onCancel: () => void;
  onDone: () => void;
}

export interface ISectionProps {
  children: React.ReactNode;
  title: string;
  style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
}

export interface ITraitsProps {
  value: string;
  clear: () => void;
}
