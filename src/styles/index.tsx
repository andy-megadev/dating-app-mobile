import { StyleSheet } from 'react-native';

import { colors } from '../theme';

const globalStyles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary
  }
});

export default globalStyles;
