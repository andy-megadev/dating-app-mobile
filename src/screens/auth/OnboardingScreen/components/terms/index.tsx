import React from 'react';
import { Text, View } from 'react-native';

import i18n from 'src/i18n';
import styles from '../../styles';

export const Terms = () => {
  return (
    <View style={[styles.center, styles.termsContainer]}>
      <Text style={[styles.text, styles.textPermission]}>
        {i18n.t('onboarding.bySigningUp')}
        <Text style={styles.textLink} onPress={() => {}}>
          {i18n.t('onboarding.termsAndConditions')}
        </Text>
      </Text>
      <Text style={[styles.text, styles.textPermission]}>
        {i18n.t('onboarding.learnHowWeUse')}
        <Text style={styles.textLink} onPress={() => {}}>
          {i18n.t('onboarding.privacyPolicy')}
        </Text>
      </Text>
    </View>
  );
};
