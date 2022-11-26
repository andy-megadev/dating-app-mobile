import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import i18n from 'src/i18n';
import { Button } from 'src/components';
import { colors } from 'src/theme';
import styles from '../../styles';

export const Continue = () => {
  return (
    <View style={[styles.center, styles.continueContainer]}>
      <View style={[styles.center, styles.orContainer]}>
        <View style={styles.orDash} />
        <Text style={[styles.text, styles.orText]}>
          {i18n.t('onboarding.or')}
        </Text>
        <View style={styles.orDash} />
      </View>
      <View style={styles.center}>
        <Button
          backgroundColor={colors.black}
          borderColor={colors.black}
          style={styles.mBottom15}
          onPress={() => {}}
        >
          <View style={[styles.center, styles.continueWith]}>
            <FontAwesome name={'apple'} size={20} color={colors.white} />
            <Text style={[styles.text, styles.continueText]}>
              {i18n.t('onboarding.continueWith', { authOption: 'Apple' })}
            </Text>
          </View>
        </Button>
        <Button
          backgroundColor={colors.blueFacebook}
          borderColor={colors.blueFacebook}
          style={styles.mBottom15}
          onPress={() => {}}
        >
          <View style={[styles.center, styles.continueWith]}>
            <FontAwesome5 name={'facebook'} size={20} color={colors.white} />
            <Text style={[styles.text, styles.continueText]}>
              {i18n.t('onboarding.continueWith', { authOption: 'Facebook' })}
            </Text>
          </View>
        </Button>
      </View>
      <Text style={[styles.text, styles.textPermission, styles.mBottom30]}>
        {i18n.t('onboarding.neverShare')}
      </Text>
      <Button
        isTextButton={true}
        title={i18n.t('onboarding.continueAnotherWay')}
        titleStyle={[styles.text, styles.textPurple]}
        onPress={() => {}}
      />
    </View>
  );
};
