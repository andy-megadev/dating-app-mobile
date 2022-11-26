import React from 'react';
import { Text, View } from 'react-native';

import i18n from 'src/i18n';
import { Button } from 'src/components';
import styles from '../../styles';

export const Gender = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>{i18n.t('onboarding.letsGetStarted')}</Text>
      <View style={[styles.center, styles.genderButtons]}>
        <Button
          title={i18n.t('common.male')}
          style={[styles.button, styles.mRight15]}
          onPress={() => {}}
        />
        <Button
          title={i18n.t('common.female')}
          style={styles.button}
          onPress={() => {}}
        />
      </View>
      <Button
        isTextButton={true}
        title={i18n.t('onboarding.anotherGender')}
        titleStyle={[styles.text, styles.textPurple]}
        onPress={() => {}}
      />
    </View>
  );
};
