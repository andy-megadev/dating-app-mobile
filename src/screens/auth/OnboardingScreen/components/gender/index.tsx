import React from 'react';
import { Text, View } from 'react-native';

import { Button } from '../../../../../components';
import styles from '../../styles';

export const Gender = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Let's get started. How do you identify?</Text>
      <View style={[styles.center, styles.genderButtons]}>
        <Button
          title={'Male'}
          style={[styles.button, styles.mRight15]}
          onPress={() => {}}
        />
        <Button title={'Female'} style={styles.button} onPress={() => {}} />
      </View>
      <Button
        isTextButton={true}
        onPress={() => {}}
        title={'Another gender'}
        titleStyle={[styles.text, styles.textPurple]}
      />
    </View>
  );
};
