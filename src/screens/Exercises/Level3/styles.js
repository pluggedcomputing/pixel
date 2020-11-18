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
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBoxContent: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.colorTextPrimary,
  },
  textAnswer: {
    fontSize: fonts.small,
    marginTop: metrics.smallMargin,
    textAlign: 'center',
    color: colors.colorSecondaryDark,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flex: 1,
    width: metrics.screenWidth,
    marginTop: metrics.baseMargin,
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: metrics.baseMargin,
  },
  buttons: {
    flex: 1,
  },
});

export default styles;
