import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../../components';
import globalStyles from '../../../styles';
import { fonts } from '../../../theme';

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
        <Button onPress={() => {}}>
          <Text>Male</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  identifyContainer: {},
  logoContainer: {
    paddingVertical: 60
  },
  logoImage: { width: 300 },
  mainContainer: {
    paddingHorizontal: 20
  },
  text: {
    fontSize: fonts.xvi
  }
});

export default OnboardingScreen;
