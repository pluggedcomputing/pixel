import {StyleSheet} from 'react-native';

import {metrics, colors, fonts} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
    backgroundColor: colors.colorPrimary,
  },
  halfTopView: {
    flex: 1,
    alignItems: 'center',
    width: metrics.screenWidth,
    backgroundColor: colors.colorPrimary,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
  },
  viewBoxContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textBoxContent: {
    textAlign: 'center', fontSize: fonts.small, paddingHorizontal: metrics.basePadding, color: colors.colorTextPrimary
  },
  textAnswer: {
    fontSize: fonts.small,
    marginTop: metrics.smallMargin,
    color: colors.colorSecondaryDark,
    fontWeight: 'bold',
  },
});

export default styles;
