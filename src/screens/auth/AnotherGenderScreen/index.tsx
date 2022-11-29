import React, { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

import i18n from 'src/i18n';
import { Button, Radio } from 'src/components';
import globalStyles from 'src/styles';
import { colors, fonts } from 'src/theme';
import { scale as s, scaleHeight as sh } from 'src/utils';
import { SHOW_TO_OPTIONS } from './constants';

export const AnotherGenderScreen = () => {
  const [isSwitch, setIsSwitch] = useState<boolean>(true);
  const [intersexIdentity, setIntersexIdentity] = useState<string>('Yes');

  const handleChosenOption = (value: string, index: number) => {
    console.log(value, index);
  };

  const handleSwitch = (value: boolean) => setIsSwitch(value);

  const clearIntersexIdentity = () => setIntersexIdentity('');

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={[globalStyles.center, styles.headerContainer]}>
        <Button
          isTextButton={true}
          title={i18n.t('common.cancel')}
          titleStyle={styles.textRegular}
        />
        <Text style={styles.textHeader}>
          {i18n.t('anotherGender.howDoYouIdentify')}
        </Text>
        <Button
          isTextButton={true}
          title={i18n.t('common.done')}
          titleStyle={styles.textRegular}
        />
      </View>
      <Text style={[styles.textRegular, styles.sectionTitle]}>
        {i18n.t('anotherGender.iIdentifyAs')}
      </Text>
      <Pressable
        style={({ pressed }) => [
          styles.pickGender,
          { opacity: pressed ? 0.7 : 1 }
        ]}
      >
        <Text style={[styles.textLight, styles.textGender]}>Agender</Text>
        <Entypo name="chevron-thin-right" size={20} color={colors.greyMid} />
      </Pressable>
      <Text style={[styles.textRegular, styles.sectionTitle]}>
        {i18n.t('anotherGender.idLikeToBeShownTo')}
      </Text>
      <Radio options={SHOW_TO_OPTIONS} onOptionChosen={handleChosenOption} />
      <Text style={[styles.textRegular, styles.sectionTitle]}>
        {i18n.t('common.privacy')}
      </Text>
      <View style={styles.privacy}>
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
      </View>
      <Text style={[styles.textRegular, styles.sectionTitle]}>
        {i18n.t('anotherGender.otherInfo')}
      </Text>
      <View style={[globalStyles.center, styles.pickGender]}>
        <Pressable
          style={({ pressed }) => [
            styles.intersex,
            { opacity: pressed ? 0.7 : 1 }
          ]}
        >
          <Text style={[styles.textLight, styles.textGender]}>
            {i18n.t('anotherGender.intersexTraits')}
          </Text>
          {intersexIdentity ? (
            <Text
              style={[styles.textLight, styles.textGender, styles.textAccent]}
            >
              {intersexIdentity}
            </Text>
          ) : (
            <Entypo
              name="chevron-thin-right"
              size={20}
              color={colors.greyMid}
            />
          )}
        </Pressable>
        {intersexIdentity ? (
          <Pressable
            style={({ pressed }) => [
              styles.intersexClear,
              { opacity: pressed ? 0.7 : 1 }
            ]}
            onPress={clearIntersexIdentity}
          >
            <Entypo
              name="circle-with-cross"
              size={15}
              color={colors.greyDark}
            />
          </Pressable>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: s(20),
    paddingTop: sh(10),
    paddingBottom: sh(15)
  },
  intersex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  intersexClear: {
    marginLeft: 15
  },
  pickGender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: s(15)
  },
  privacy: {
    padding: s(15)
  },
  sectionTitle: {
    backgroundColor: colors.greyLighter,
    fontSize: s(fonts.xiv),
    paddingHorizontal: s(15),
    paddingVertical: sh(10)
  },
  showHowIdentify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: sh(10)
  },
  showToOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: s(15)
  },
  textAccent: {
    color: colors.accent
  },
  textRegular: {
    fontFamily: 'Rubik-Regular'
  },
  textLight: {
    fontFamily: 'Rubik-Light'
  },
  textHeader: {
    flexShrink: 1,
    fontFamily: 'Rubik-Medium',
    fontSize: s(fonts.xviii),
    textAlign: 'center'
  },
  textHint: {
    color: colors.greyDark,
    fontSize: s(fonts.xiv)
  },
  textGender: {
    fontSize: s(fonts.xviii),
    flexShrink: 1
  }
});
