import React, { useEffect, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Continue, Gender, Logo, Terms } from './components';
import styles from './styles';
import i18n from '../../../i18n';
import { alert, generateAlertConfig, IAlertConfig } from '../../../utils';

const OnboardingScreen = () => {
  const alertButtons: IAlertConfig['buttons'] = useMemo(
    () => [
      {
        text: i18n.t('common.noThanks'),
        onPress: handleOk,
        style: 'default'
      },
      {
        text: i18n.t('common.ok'),
        onPress: handleCancel,
        style: 'default'
      }
    ],
    []
  );

  const alertConfig = useMemo(
    () =>
      generateAlertConfig(
        i18n.t('onboarding.wantToBeNotified'),
        undefined,
        alertButtons
      ),
    []
  );

  useEffect(() => alert(alertConfig), []);

  const handleOk = () => {};

  const handleCancel = () => {};

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
