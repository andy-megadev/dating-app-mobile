import { Reducer } from 'react';
import { PressableProps, StyleProp, ViewStyle } from 'react-native';

export type IIntersexTraits = 'Y' | 'N' | 'S' | null;

export enum IntersexTraits {
  Y = 'Y',
  N = 'N',
  S = 'S'
}

export const isIntersexTraits = (value: unknown): value is IIntersexTraits =>
  typeof value === 'string' && value in IntersexTraits;

export type IShowTo = 'M' | 'W';

export enum ShowTo {
  M = 'M',
  W = 'W'
}

export const isShowTo = (value: unknown): value is IShowTo =>
  typeof value === 'string' && value in ShowTo;

export interface IAnotherGenderState {
  intersexTraits: IIntersexTraits;
  identity: string;
  isShowIdentity: boolean;
  showTo: IShowTo;
}

export type IAnotherGenderAction =
  | { type: 'SET_IDENTITY'; payload: string }
  | { type: 'SET_SHOW_TO'; payload: IShowTo }
  | { type: 'SET_INTERSEX_TRAITS'; payload: IIntersexTraits }
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
