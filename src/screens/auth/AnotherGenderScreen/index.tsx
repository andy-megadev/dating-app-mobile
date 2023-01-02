import React, { useCallback, useReducer, useRef } from 'react';
import { Switch, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet from '@gorhom/bottom-sheet';

import i18n from 'src/i18n';
import { Radio, BottomModal } from 'src/components';
import { IRadioProps } from 'src/components/types';
import globalStyles from 'src/styles';
import { colors } from 'src/theme';
import { Cell, Header, Section, Traits } from './components';
import { SHOW_TO_OPTIONS, INTERSEX_TRAITS_OPTIONS } from './constants';
import styles from './styles';
import {
  IAnotherGenderReducer,
  IAnotherGenderState,
  IntersexTraits,
  ShowTo,
  isIntersexTraits,
  isShowTo
} from './types';

const initialState: IAnotherGenderState = {
  intersexTraits: null,
  identity: 'Agender',
  isShowIdentity: true,
  showTo: ShowTo.W
};

const reducer: IAnotherGenderReducer = (state, action) => {
  switch (action.type) {
    case 'SET_IDENTITY':
      return {
        ...state,
        identity: action.payload
      };
    case 'SET_INTERSEX_TRAITS':
      return {
        ...state,
        intersexTraits: action.payload
      };
    case 'SET_IS_SHOW_IDENTITY':
      return {
        ...state,
        isShowIdentity: action.payload
      };
    case 'SET_SHOW_TO':
      return {
        ...state,
        showTo: action.payload
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export const AnotherGenderScreen = () => {
  const [anotherGender, dispatch] = useReducer<IAnotherGenderReducer>(
    reducer,
    initialState
  );
  const { identity, intersexTraits, isShowIdentity, showTo } = anotherGender;

  const navigation = useNavigation();

  const bottomModalRef = useRef<BottomSheet>(null);

  const handleShowTo: IRadioProps['onOptionChosen'] = (value) =>
    isShowTo(value) && dispatch({ type: 'SET_SHOW_TO', payload: value });

  const handleSwitch = (value: boolean) =>
    dispatch({ type: 'SET_IS_SHOW_IDENTITY', payload: value });

  const handleCancel = useCallback(() => navigation.goBack(), []);

  const handleDone = () => navigation.goBack();

  const clearIntersexTraits = () =>
    dispatch({ type: 'SET_INTERSEX_TRAITS', payload: null });

  const openIntersexTraitsPicker = () => bottomModalRef.current?.snapToIndex(0);

  const handleIntersexTraits: IRadioProps['onOptionChosen'] = (value) => {
    isIntersexTraits(value) &&
      dispatch({ type: 'SET_INTERSEX_TRAITS', payload: value });
    bottomModalRef.current?.close();
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Header onCancel={handleCancel} onDone={handleDone} />
      <Section title={i18n.t('anotherGender.iIdentifyAs')}>
        <Cell title={identity} />
      </Section>
      <Section title={i18n.t('anotherGender.idLikeToBeShownTo')}>
        <Radio
          value={showTo}
          options={SHOW_TO_OPTIONS}
          containerStyle={{ paddingHorizontal: 0 }}
          onOptionChosen={handleShowTo}
        />
      </Section>
      <Section title={i18n.t('common.privacy')}>
        <View style={[globalStyles.center, styles.showHowIdentify]}>
          <Text style={[styles.textLight, styles.textGender]}>
            {i18n.t('anotherGender.showHowiIdentify')}
          </Text>
          <Switch
            ios_backgroundColor={colors.greyLighter}
            trackColor={{ true: colors.accent }}
            value={isShowIdentity}
            onValueChange={handleSwitch}
          />
        </View>
        <Text style={[styles.textLight, styles.textHint]}>
          {i18n.t('anotherGender.turningThisOffWill')}
        </Text>
      </Section>
      <Section title={i18n.t('anotherGender.otherInfo')}>
        <Cell
          title={i18n.t('anotherGender.intersexTraits')}
          onPress={openIntersexTraitsPicker}
        >
          {intersexTraits ? (
            <Traits
              value={
                intersexTraits === IntersexTraits.Y
                  ? i18n.t('common.yes')
                  : intersexTraits === IntersexTraits.N
                  ? i18n.t('common.no')
                  : i18n.t('anotherGender.idRatherNotSay')
              }
              clear={clearIntersexTraits}
            />
          ) : null}
        </Cell>
      </Section>
      <BottomModal
        ref={bottomModalRef}
        snapPoints={['30%']}
        style={{ paddingTop: 20 }}
        handleComponent={null}
      >
        <Text style={styles.textHeader}>
          {i18n.t('anotherGender.doYouHaveAnIntersex')}
        </Text>
        <Radio
          value={intersexTraits}
          options={INTERSEX_TRAITS_OPTIONS}
          onOptionChosen={handleIntersexTraits}
        />
      </BottomModal>
    </SafeAreaView>
  );
};
