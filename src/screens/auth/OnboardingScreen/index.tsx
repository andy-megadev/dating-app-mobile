import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Continue, Gender, Logo, Terms } from './components';
import styles from './styles';

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={[styles.safeArea, styles.mainContainer]}>
      <Logo />
      <Gender />
      <Continue />
      <Terms />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
