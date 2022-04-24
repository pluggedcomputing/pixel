import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.4;
const WIDTH_PORCENTAGE = 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
  },
  logo: {
    resizeMode: 'contain',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    marginVertical: metrics.doubleBaseMargin,
    // backgroundColor: '#23d',
  },
  title: {
    resizeMode: 'contain',
    width: metrics.screenWidth * 0.3,
    height: metrics.screenHeight * 0.05,
    // backgroundColor: '#000',
  },
  text: {
    fontSize: fonts.medium,
    textAlign: 'center',
    color: colors.colorSecondary,
    marginHorizontal: metrics.doubleBaseMargin,
    fontFamily: 'Poppins-SemiBold',
  },
  superscriptText: {
    fontSize: fonts.small,
    textAlign: 'center',
    color: colors.colorSecondary,
    marginHorizontal: metrics.doubleBaseMargin,
    fontFamily: 'Poppins-Regular',
  },
  buttons: {
    margin: metrics.smallMargin,
  },
  containerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButtons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
