import {StyleSheet} from 'react-native';

import {fonts, metrics, colors} from '../../styles';

const WIDTH_PORCENTAGE = 0.08;
const HEIGHT_PORCENTAGE = 0.08;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    elevation: metrics.baseElevation,
    paddingRight: metrics.smallPadding,
    paddingLeft: metrics.smallPadding,
  },
  textButton: {
    fontSize: fonts.medium,
    margin: metrics.doubleBaseMargin,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.colorTextSecondary,
  },
  image: {
    resizeMode: 'contain',
    width: metrics.screenWidth * HEIGHT_PORCENTAGE,
    height: metrics.screenHeight * WIDTH_PORCENTAGE,
  },
});

export default styles;
