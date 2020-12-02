import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.6;
const WIDTH_PORCENTAGE = 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorSecondaryLight,
  },
  logo: {
    resizeMode: 'contain',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
  },
  text: {
    fontSize: fonts.medium,
    textAlign: 'center',
    color: colors.colorTextPrimary,
    marginBottom: metrics.baseMargin,
  },
  buttons: {
    margin: metrics.smallMargin,
  },
});

export default styles;
