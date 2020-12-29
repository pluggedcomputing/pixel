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
  halfBottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
    backgroundColor: colors.colorSecondaryLight,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  viewBoxContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textBoxContent: {
    textAlign: 'center',
  },
  textAnswer: {
    fontSize: fonts.small,
    marginTop: metrics.smallMargin,
    color: colors.colorSecondaryDark,
    fontWeight: 'bold',
  },
  defaultText: {
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    textAlign: 'center',
    color: colors.colorTextPrimary,
  },
});

export default styles;
