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
    backgroundColor: colors.colorSecondaryLight,
  },
  logo: {
    resizeMode: 'contain',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    // backgroundColor: '#23d',
  },
  title: {
    resizeMode: 'contain',
    width: metrics.screenWidth * 0.3,
    height: metrics.screenHeight * 0.05,
    // backgroundColor: '#000',
  },
  text: {
    fontSize: fonts.small,
    textAlign: 'center',
    color: colors.colorTextPrimaryPixelDark,
    marginVertical: metrics.doubleBaseMargin,
    marginHorizontal: metrics.doubleBaseMargin,
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
