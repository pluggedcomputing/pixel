import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
    backgroundColor: colors.colorPrimary,
  },
  containerHeader: {
    flex: 1,
    alignItems: 'center',
    width: metrics.screenWidth,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
  },
  contentContainerStyle: {
    justifyContent: 'center',
  },
  boxContainer: {
    flex: 1.5,
  },
  containerOfContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textAnswer: {
    fontSize: fonts.small,
    marginTop: metrics.smallMargin,
    color: colors.colorSecondaryDark,
    fontWeight: 'bold',
  },
  contentText: {textAlign: 'center', fontSize: fonts.small, paddingHorizontal: metrics.basePadding, color: colors.colorTextPrimary},
  img: {
    width: metrics.screenWidth * 0.4,
    height: metrics.screenHeight * 0.17,
  },
});

export default styles;
