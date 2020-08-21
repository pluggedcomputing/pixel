import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
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
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {
    color: colors.colorTextSecondary,
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
