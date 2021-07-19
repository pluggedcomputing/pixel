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
    justifyContent: 'space-around',
    margin: metrics.baseMargin,
    alignItems: 'center',
  },
  statementImage: {
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    width: Math.round((metrics.screenWidth * 14) / 16),
    height: metrics.screenHeight * 0.2,
  },
  textBoxContent: {
    textAlign: 'center',
    fontSize: fonts.small,
    paddingHorizontal: metrics.basePadding,
    color: colors.colorTextPrimary,
  },
  contentText: {
    fontSize: fonts.small,
  },
  textAnswer: {
    fontSize: fonts.medium,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    color: colors.colorPrimaryDark,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flex: 1,
    width: metrics.screenWidth,
    marginBottom: metrics.baseMargin,
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: metrics.baseMargin,
  },
  buttons: {
    flex: 1,
  },
  boxContainer: {
    flex: 1,
  },
});

export default styles;
