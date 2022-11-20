import React from 'react';
import { Image, View } from 'react-native';

import styles from '../../styles';

const LogoTitle = require('../../../../../assets/images/logo-title.png');

export const Logo = () => {
  return (
    <View style={[styles.center, styles.logoContainer]}>
      <Image
        source={LogoTitle}
        resizeMode={'contain'}
        style={styles.logoImage}
      />
    </View>
  );
};
