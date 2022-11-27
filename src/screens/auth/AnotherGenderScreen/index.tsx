import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

import i18n from 'src/i18n';
import { Button, Radio } from 'src/components';
import globalStyles from 'src/styles';
import { colors, fonts } from 'src/theme';
import { scale as s } from 'src/utils';
import { SHOW_TO_OPTIONS } from './constants';

export const AnotherGenderScreen = () => {
  const handleChosenOption = (value: string, index: number) => {
    console.log(value, index);
  };

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: s(20),
    paddingTop: 5,
    paddingBottom: 15
  },
  pickGender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: s(15)
  },
  sectionTitle: {
    backgroundColor: colors.greyLighter,
    fontSize: fonts.xiv,
    paddingHorizontal: s(15),
    paddingVertical: 10
  },
  showToOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: s(15)
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
    fontSize: fonts.xviii,
    textAlign: 'center'
  },
  textGender: {
    fontSize: fonts.xviii
  }
});
