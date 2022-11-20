import { StyleSheet } from 'react-native';

import globalStyles from '../../../../styles';
import { colors, fonts } from '../../../../theme';

const styles = StyleSheet.create({
  ...globalStyles,
  button: {
    flex: 1
  },
  continueAnotherWay: {
    marginTop: 30
  },
  continueContainer: {
    marginTop: 30
  },
  continueText: {
    color: colors.white,
    fontFamily: 'Rubik-SemiBold',
    marginLeft: 10
  },
  continueWith: {
    flexDirection: 'row'
  },
  genderButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
    width: '100%'
  },
  logoContainer: {
    paddingVertical: 60
  },
  logoImage: { width: 300 },
  mainContainer: {
    paddingHorizontal: 20
  },
  mBottom15: {
    marginBottom: 15
  },
  mBottom30: {
    marginBottom: 30
  },
  mRight15: {
    marginRight: 15
  },
  orContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  orDash: {
    backgroundColor: colors.greyLight,
    width: 25,
    height: 1
  },
  orText: {
    color: colors.greyMid,
    fontSize: fonts.xviii,
    marginHorizontal: 15
  },
  termsContainer: {
    marginTop: 'auto'
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
