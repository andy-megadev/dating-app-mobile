import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

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
        <Button
          isTextButton={true}
          onPress={() => {}}
          title={'Another gender'}
          titleStyle={[styles.text, styles.textPurple]}
        />
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
            <View style={[globalStyles.center, styles.continueWith]}>
              <FontAwesome name={'apple'} size={20} color={colors.white} />
              <Text style={[styles.text, styles.continueText]}>
                Continue with Apple
              </Text>
            </View>
          </Button>
          <Button
            backgroundColor={colors.blueFacebook}
            borderColor={colors.blueFacebook}
            style={styles.mBottom15}
            onPress={() => {}}
          >
            <View style={[globalStyles.center, styles.continueWith]}>
              <FontAwesome5 name={'facebook'} size={20} color={colors.white} />
              <Text style={[styles.text, styles.continueText]}>
                Continue with Facebook
              </Text>
            </View>
          </Button>
        </View>
        <Text style={[styles.text, styles.textPermission, styles.mBottom30]}>
          We'll never share anything without your permission
        </Text>
        <Button
          isTextButton={true}
          title={'Continue another way'}
          titleStyle={[styles.text, styles.textPurple]}
          onPress={() => {}}
        />
      </View>
      <View style={[globalStyles.center, styles.termsContainer]}>
        <View style={styles.terms}>
          <Text style={[styles.text, styles.textPermission]}>
            {'By signing up, you agree to our '}
          </Text>
          <Button
            isTextButton={true}
            title={'Terms and Conditions'}
            titleStyle={[styles.text, styles.textPermission, styles.textLink]}
          />
        </View>
        <View style={styles.terms}>
          <Text style={[styles.text, styles.textPermission]}>
            {'Learn how we use your data in our '}
          </Text>
          <Button
            isTextButton={true}
            title={'Privacy Policy'}
            titleStyle={[styles.text, styles.textPermission, styles.textLink]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1
  },
  continueAnotherWay: {
    marginTop: 30
  },
  continueContainer: {
    marginTop: 30
  },
  continueText: {
    color: colors.white,
    fontFamily: 'Rubik-SemiBold',
    marginLeft: 10
  },
  continueWith: {
    flexDirection: 'row'
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
  mBottom30: {
    marginBottom: 30
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
  terms: { flexDirection: 'row' },
  termsContainer: {
    marginTop: 'auto'
  },
  text: {
    color: colors.greyDark,
    fontFamily: 'Rubik-Regular',
    fontSize: fonts.xvi,
    textAlign: 'center'
  },
  textLink: {
    textDecorationLine: 'underline'
  },
  textPermission: {
    fontSize: fonts.xii
  },
  textPurple: {
    color: colors.accent
  }
});

export default OnboardingScreen;
