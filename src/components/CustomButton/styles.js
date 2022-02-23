import {StyleSheet} from 'react-native';

import {fonts, metrics, colors} from '../../styles';

const WIGTH_PORCENTAGE = 0.70;
const HEIGHT_PORCENTAGE = 0.08;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.colorPrimaryPixelDark,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    width: metrics.screenWidth * WIGTH_PORCENTAGE,
    elevation: metrics.baseElevation,
    paddingRight: metrics.smallPadding,
    paddingLeft: metrics.smallPadding,
    borderRadius:metrics.borderRadius,
  },
  textButton: {
    fontSize: fonts.medium,
    margin: metrics.doubleBaseMargin,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.colorTextSecondaryPixel,
  },
  image: {
    resizeMode: 'contain',
    width: metrics.screenWidth * WIGTH_PORCENTAGE,
    height: metrics.screenHeight * WIGTH_PORCENTAGE,
  },
});

export default styles;
