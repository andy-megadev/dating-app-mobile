import { Reducer } from 'react';

export type IShowTo = 'man' | 'woman';

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
