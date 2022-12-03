import React, { memo } from 'react';
import { Text, View } from 'react-native';

import i18n from 'src/i18n';
import { Button } from 'src/components';
import globalStyles from 'src/styles';
import styles from '../../styles';

interface IHeaderProps {
  onCancel: () => void;
  onDone: () => void;
}

export const Header = memo(({ onCancel, onDone }: IHeaderProps) => (
  <View style={[globalStyles.center, styles.headerContainer]}>
    <Button
      isTextButton={true}
      title={i18n.t('common.cancel')}
      titleStyle={styles.textRegular}
      onPress={onCancel}
    />
    <Text style={styles.textHeader}>
      {i18n.t('anotherGender.howDoYouIdentify')}
    </Text>
    <Button
      isTextButton={true}
      title={i18n.t('common.done')}
      titleStyle={styles.textRegular}
      onPress={onDone}
    />
  </View>
));
