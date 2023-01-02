import React from 'react';
import { Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import i18n from 'src/i18n';
import { Button } from 'src/components';
import { IAuthStackParamList, Screens } from 'src/navigation/types';
import styles from '../../styles';

export const Gender = () => {
  const navigation = useNavigation<NavigationProp<IAuthStackParamList>>();

  const handleAnotherGender = () => navigation.navigate(Screens.AnotherGender);

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
        onPress={handleAnotherGender}
      />
    </View>
  );
};
