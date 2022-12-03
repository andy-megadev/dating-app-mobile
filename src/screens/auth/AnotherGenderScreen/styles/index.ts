import { StyleSheet } from 'react-native';

import { colors, fonts } from 'src/theme';
import { scale as s, scaleHeight as sh } from 'src/utils';

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: sh(15)
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: s(20),
    paddingTop: sh(10),
    paddingBottom: sh(15)
  },
  intersexClear: {
    marginLeft: 15
  },
  intersexTraits: { flexDirection: 'row', alignItems: 'center' },
  sectionContainer: {
    paddingHorizontal: s(15)
  },
  sectionTitle: {
    backgroundColor: colors.greyLighter,
    fontSize: s(fonts.xiv),
    paddingHorizontal: s(15),
    paddingVertical: sh(10)
  },
  showHowIdentify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: sh(10),
    paddingTop: sh(15)
  },
  textAccent: {
    color: colors.accent
  },
  textRegular: {
    fontFamily: 'Rubik-Regular'
  },
  textLight: {
    fontFamily: 'Rubik-Light'
  },
  textHeader: {
    flexShrink: 1,
    fontFamily: 'Rubik-Medium',
    fontSize: s(fonts.xviii),
    textAlign: 'center'
  },
  textHint: {
    color: colors.greyDark,
    fontSize: s(fonts.xiv),
    paddingBottom: sh(15)
  },
  textGender: {
    fontSize: s(fonts.xviii),
    flexShrink: 1
  }
});

export default styles;
