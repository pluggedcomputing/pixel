import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight * 0.25,
    width: metrics.screenWidth * 0.3,
    backgroundColor: colors.colorSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: metrics.baseBorder,
    elevation: metrics.baseElevation,
  },
  subContainer: {
    flex: 1,
    margin: metrics.smallMargin,
    width: metrics.screenWidth * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
  },
  imageLevel: {
    flex: 3,
    margin: metrics.smallMargin,
    width: metrics.screenWidth * 0.2,
    resizeMode: 'contain',
  },

  textLevel: {
    flex: 1,
    fontSize: fonts.title,
    color: colors.colorTextSecondary,
  },
});

export default styles;
