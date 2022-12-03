import React, { useCallback, useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import i18n from 'src/i18n';
import { Radio } from 'src/components';
import globalStyles from 'src/styles';
import { colors } from 'src/theme';
import { Cell, Header, Section, Traits } from './components';
import { SHOW_TO_OPTIONS } from './constants';
import styles from './styles';

export const AnotherGenderScreen = () => {
  const [isSwitch, setIsSwitch] = useState<boolean>(true);
  const [hasIntersexTraits, setHasIntersexTraits] = useState<
    boolean | null | undefined
  >(null);

  const navigation = useNavigation();

  const handleChosenOption = (value: string, index: number) => {
    console.log(value, index);
  };

  const handleSwitch = (value: boolean) => setIsSwitch(value);

  const handleCancel = useCallback(() => navigation.goBack(), []);
  const handleDone = useCallback(() => navigation.goBack(), []);

  const clearintersexTraits = () => setHasIntersexTraits(null);

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Header onCancel={handleCancel} onDone={handleDone} />
      <Section title={i18n.t('anotherGender.iIdentifyAs')}>
        <Cell title={'Agender'} />
      </Section>
      <Section title={i18n.t('anotherGender.idLikeToBeShownTo')}>
        <Radio
          options={SHOW_TO_OPTIONS}
          containerStyle={{ paddingHorizontal: 0 }}
          onOptionChosen={handleChosenOption}
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
            value={isSwitch}
            onValueChange={handleSwitch}
          />
        </View>
        <Text style={[styles.textLight, styles.textHint]}>
          {i18n.t('anotherGender.turningThisOffWill')}
        </Text>
      </Section>
      <Section title={i18n.t('anotherGender.otherInfo')}>
        <Cell title={i18n.t('anotherGender.intersexTraits')}>
          {hasIntersexTraits !== null ? (
            <Traits
              value={
                hasIntersexTraits
                  ? i18n.t('common.yes')
                  : hasIntersexTraits === undefined
                  ? i18n.t('anotherGender.idRatherNotSay')
                  : i18n.t('common.no')
              }
              clear={clearintersexTraits}
            />
          ) : null}
        </Cell>
      </Section>
    </SafeAreaView>
  );
};
