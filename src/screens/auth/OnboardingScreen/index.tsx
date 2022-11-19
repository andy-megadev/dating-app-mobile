import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Continue from './components/continue';
import Gender from './components/gender';
import Logo from './components/logo';
import Terms from './components/terms';

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
