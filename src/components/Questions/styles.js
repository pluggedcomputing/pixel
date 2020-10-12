import {StyleSheet} from 'react-native';

import {metrics, colors} from '../../styles';

const HEIGHT_PORCENTAGE = 0.3;
const WIDTH_PORCENTAGE = 0.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.colorAccent,
  },
  logo: {
    resizeMode: 'contain',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
  },
  contianerMessage: {
    backgroundColor: colors.colorSecondaryLight,
    width: metrics.screenWidth * 0.8,
    padding: metrics.basePadding,
    margin: metrics.doubleBaseMargin,
  },
});

export default styles;
