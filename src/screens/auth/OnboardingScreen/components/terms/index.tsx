import React from 'react';
import { Text, View } from 'react-native';

import { Button } from '../../../../../components';
import styles from '../../styles';

export const Terms = () => {
  return (
    <View style={[styles.center, styles.termsContainer]}>
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
  );
};
