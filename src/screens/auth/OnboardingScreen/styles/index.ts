import { StyleSheet } from 'react-native';

import globalStyles from '../../../../styles';
import { colors, fonts } from '../../../../theme';
import { scale as s, scaleHeight as sh } from '../../../../utils';

const styles = StyleSheet.create({
  ...globalStyles,
  button: {
    flex: 1
  },
  continueAnotherWay: {
    marginTop: sh(30)
  },
  continueContainer: {
    marginTop: sh(30)
  },
  continueText: {
    color: colors.white,
    fontFamily: 'Rubik-SemiBold',
    marginLeft: s(10)
  },
  continueWith: {
    flexDirection: 'row'
  },
  genderButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sh(20),
    marginBottom: sh(30),
    width: '100%'
  },
  logoContainer: {
    paddingVertical: sh(60)
  },
  logoImage: { width: 300 },
  mainContainer: {
    paddingHorizontal: s(20)
  },
  mBottom15: {
    marginBottom: sh(15)
  },
  mBottom30: {
    marginBottom: sh(30)
  },
  mRight15: {
    marginRight: s(15)
  },
  orContainer: {
    flexDirection: 'row',
    marginBottom: sh(20)
  },
  orDash: {
    backgroundColor: colors.greyLight,
    width: s(25),
    height: 1
  },
  orText: {
    color: colors.greyMid,
    fontSize: fonts.xviii,
    marginHorizontal: s(15)
  },
  termsContainer: {
    marginTop: 'auto',
    marginBottom: s(10)
  },
  text: {
    color: colors.greyDark,
    fontFamily: 'Rubik-Regular',
    fontSize: fonts.xvi,
    textAlign: 'center'
  },
  textLink: {
    textDecorationLine: 'underline'
  },
  textPermission: {
    fontSize: fonts.xii
  },
  textPurple: {
    color: colors.accent
  }
});

export default styles;
