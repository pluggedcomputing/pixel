import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.screenWidth * 0.9,
    height: metrics.screenHeight * 0.35,
    backgroundColor: colors.colorSecondaryLight,
  },
  boxContainer: {
    alignItems: 'center',
    width: metrics.screenWidth * 0.9,
    height: metrics.screenHeight * 0.3,
  },
  pagination: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: metrics.screenWidth * 0.06,
  },
  pagingText: {
    color: colors.colorSecondaryDark,
    fontSize: fonts.bigger,
    height: metrics.screenHeight * 0.08,
  },
  pagingActiveText: {
    color: colors.colorPrimary,
    fontSize: fonts.bigger,
    height: metrics.screenHeight * 0.08,
  },
});

export default styles;
