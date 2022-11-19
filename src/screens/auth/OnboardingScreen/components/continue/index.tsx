import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import { Button } from '../../../../../components';
import styles from '../../styles';
import { colors } from '../../../../../theme';

const Continue = () => {
  return (
    <View style={[styles.center, styles.continueContainer]}>
      <View style={[styles.center, styles.orContainer]}>
        <View style={styles.orDash} />
        <Text style={[styles.text, styles.orText]}>or</Text>
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
          <View style={[styles.center, styles.continueWith]}>
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
  );
};

export default Continue;
