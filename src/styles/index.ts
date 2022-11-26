import { StyleSheet } from 'react-native';

import { colors } from 'src/theme';

const globalStyles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary
  }
});

export default globalStyles;
