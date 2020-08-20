import {StyleSheet} from 'react-native';

import {fonts, metrics, colors} from '../../styles';

const HEIGHT_PORCENTAGE = 0.15;
const WIDTH_PORCENTAGE = 0.25;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    width: metrics.screenHeight * WIDTH_PORCENTAGE,
    height: metrics.screenWidth * HEIGHT_PORCENTAGE,
    elevation: metrics.baseElevation,
  },
  textButton: {
    fontSize: fonts.medium,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.colorTextSecondary,
  },
  image: {
    resizeMode: 'contain',
    width: metrics.screenWidth * 0.06,
    height: metrics.screenHeight * 0.06,
  },
});

export default styles;
