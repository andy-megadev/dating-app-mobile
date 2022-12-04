import { Reducer } from 'react';

export interface IAnotherGenderState {
  identity: string;
  intersexTraits: boolean | null | undefined;
  isShowIdentity: boolean;
  showTo: 'man' | 'woman';
}

export type IAnotherGenderAction =
  | {
      type: 'SET_IDENTITY';
      payload: string;
    }
  | { type: 'SET_SHOW_TO'; payload: 'man' | 'woman' }
  | { type: 'SET_INTERSEX_TRAITS'; payload: boolean | null | undefined }
  | { type: 'SET_IS_SHOW_IDENTITY'; payload: boolean }
  | { type: 'RESET' };

export type IAnotherGenderReducer = Reducer<
  IAnotherGenderState,
  IAnotherGenderAction
>;
