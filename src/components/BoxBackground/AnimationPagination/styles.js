import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../../styles';

const HEIGHT_PERCENTE = 0.02;
const WIDTH_PERCENTE = 0.03;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: metrics.smallMargin,
    alignSelf: 'center',
    width: metrics.screenWidth * 0.3,
  },

  retangle: {
    height: metrics.screenHeight * HEIGHT_PERCENTE,
    width: metrics.screenWidth * WIDTH_PERCENTE,
  },
  retanglePainted: {
    backgroundColor: colors.colorPrimary,
  },
  retangleDefault: {
    backgroundColor: colors.colorSecondaryDark,
  },
  miniRetangle: {
    height: metrics.screenHeight * 0.015,
    width: metrics.screenWidth * 0.025,
  },
});

export default styles;
