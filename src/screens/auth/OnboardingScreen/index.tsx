import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../../components';
import globalStyles from '../../../styles';
import { colors, fonts } from '../../../theme';

const LogoTitle = require('../../../assets/images/logo-title.png');

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={[globalStyles.safeArea, styles.mainContainer]}>
      <View style={[globalStyles.center, styles.logoContainer]}>
        <Image
          source={LogoTitle}
          resizeMode={'contain'}
          style={styles.logoImage}
        />
      </View>
      <View style={[globalStyles.center, styles.identifyContainer]}>
        <Text style={styles.text}>Let's get started. How do you identify?</Text>
        <View style={[globalStyles.center, styles.genderButtons]}>
          <Button
            title={'Male'}
            style={[styles.button, styles.mRight15]}
            onPress={() => {}}
          />
          <Button title={'Female'} style={styles.button} onPress={() => {}} />
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
          <Text style={[styles.text, styles.textPurple]}>Another gender</Text>
        </TouchableOpacity>
      </View>
      <View style={[globalStyles.center, styles.continueContainer]}>
        <View style={[globalStyles.center, styles.orContainer]}>
          <View style={styles.orDash} />
          <Text style={[styles.text, styles.orText]}>or</Text>
          <View style={styles.orDash} />
        </View>
        <View style={globalStyles.center}>
          <Button
            backgroundColor={colors.black}
            borderColor={colors.black}
            style={styles.mBottom15}
            onPress={() => {}}
          >
            <Text style={[styles.text, styles.continueText]}>
              Continue with Apple
            </Text>
          </Button>
          <Button
            backgroundColor={colors.blueFacebook}
            borderColor={colors.blueFacebook}
            style={styles.mBottom15}
            onPress={() => {}}
          >
            <Text style={[styles.text, styles.continueText]}>
              Continue with Facebook
            </Text>
          </Button>
        </View>
        <Text style={[styles.text, styles.permissionText]}>
          We'll never share anything without your permission
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.continueAnotherWay}
          onPress={() => {}}
        >
          <Text style={[styles.text, styles.textPurple]}>
            Continue another way
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 15
  },
  continueAnotherWay: {
    marginTop: 30
  },
  continueContainer: {
    marginTop: 30
  },
  continueText: {
    color: colors.white,
    fontFamily: 'Rubik-SemiBold'
  },
  genderButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
    width: '100%'
  },
  identifyContainer: {},
  logoContainer: {
    paddingVertical: 60
  },
  logoImage: { width: 300 },
  mainContainer: {
    paddingHorizontal: 20
  },
  mBottom15: {
    marginBottom: 15
  },
  mRight15: {
    marginRight: 15
  },
  orContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  orDash: {
    backgroundColor: colors.greyLight,
    width: 25,
    height: 1
  },
  orText: {
    color: colors.greyMid,
    fontSize: fonts.xviii,
    marginHorizontal: 15
  },
  permissionText: {
    fontSize: fonts.xii
  },
  text: {
    color: colors.greyDark,
    fontFamily: 'Rubik-Regular',
    fontSize: fonts.xvi,
    textAlign: 'center'
  },
  textPurple: {
    color: colors.accent
  }
});

export default OnboardingScreen;
