import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

import i18n from 'src/i18n';
import { Button } from 'src/components';
import globalStyles from 'src/styles';
import { colors, fonts } from 'src/theme';
import { scale as s } from 'src/utils';

export const AnotherGenderScreen = () => {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={[globalStyles.center, styles.headerContainer]}>
        <Button
          isTextButton={true}
          title={i18n.t('common.cancel')}
          titleStyle={styles.text}
        />
        <Text style={styles.textHeader}>
          {i18n.t('anotherGender.howDoYouIdentify')}
        </Text>
        <Button
          isTextButton={true}
          title={i18n.t('common.done')}
          titleStyle={styles.text}
        />
      </View>
      <Text style={[styles.text, styles.sectionTitle]}>
        {i18n.t('anotherGender.iIdentifyAs')}
      </Text>
      <Pressable
        style={({ pressed }) => [
          styles.pickGender,
          { opacity: pressed ? 0.8 : 1 }
        ]}
      >
        <Text style={[styles.text, styles.textGender]}>Agender</Text>
        <Entypo name="chevron-thin-right" size={20} color={colors.greyMid} />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: s(20),
    paddingBottom: 10
  },
  pickGender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: s(20)
  },
  sectionTitle: {
    backgroundColor: colors.greyLighter,
    fontSize: fonts.xiv,
    paddingHorizontal: s(20),
    paddingVertical: 10
  },
  text: {
    fontFamily: 'Rubik-Regular'
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
