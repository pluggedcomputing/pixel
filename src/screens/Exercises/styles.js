import {StyleSheet} from 'react-native';

import {metrics, colors, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
    backgroundColor: colors.colorAccent,
  },
  screen: {
    width: 330,
    alignItems: 'center',
    justifyContent: 'center',
  },
  halfTopView: {
    flex: 1,
    alignItems: 'center',
    width: metrics.screenWidth * 0.9,
    backgroundColor: colors.colorAccent,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
  },
  conteinerPaintTableQuestions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
    backgroundColor: colors.colorPrimary,
  },
  viewBoxContent: {
    flex: 1,
    justifyContent: 'space-around',
    margin: metrics.baseMargin,
    alignItems: 'center',
  },
  buttonImage:{
    margin: 10,
    position: 'relative',
  },
  buttonImageRotate:{
    margin: 10,
    position: 'relative',
    transform: [{ rotate: '180deg' }],
  },
  statementImage: {
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    width: Math.round((metrics.screenWidth * 14) / 16),
    height: metrics.screenHeight * 0.35,
  },
  animation: {
    width: metrics.screenHeight * HEIGHT_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    alignSelf: 'center',
  },
  textBoxContent: {
    textAlign: 'center',
    fontSize: fonts.small,
    paddingHorizontal: metrics.basePadding,
    color: colors.colorAccent,
  },
  contentText: {
    fontSize: fonts.small,
    color: colors.colorTextPrimary,
    fontFamily: 'Poppins-Ligth',
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
});

export default styles;
