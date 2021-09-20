import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.2;
const WIDTH_PORCENTAGE = 0.3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: metrics.screenWidth,
    justifyContent: 'space-around',
    backgroundColor: colors.colorPrimary,
  },
  credits: {
    color: colors.colorSecondary,
    textAlign: 'center',
    fontSize: fonts.small,
    padding: 3,
  },
  logo: {
    resizeMode: 'contain',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
  },
  textButton: {
    fontSize: fonts.regular,
    margin: metrics.baseMargin,
    alignSelf: 'center',
    color: colors.colorSecondary,
    textDecorationLine: 'underline',
  },
  viewBoxContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContent: {
    padding: metrics.basePadding,
    fontSize: fonts.small,
    textAlign: 'justify',
    color: colors.colorTextPrimary,
  },
  tankTetris: {
    resizeMode: 'contain',
    width: metrics.screenWidth * WIDTH_PORCENTAGE - 50,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
  },
  imgSite: {
    resizeMode: 'center',
    marginTop: metrics.doubleBaseMargin,
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
  },
});

export default styles;
