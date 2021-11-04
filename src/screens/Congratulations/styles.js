import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../styles';

const HEIGHT_PORCENTAGE = 0.12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: metrics.screenWidth,
    marginTop: metrics.doubleBaseMargin,
  },
  textTop: {
    textAlign: 'center',
    color: colors.colorTextSecondary,
    fontSize: fonts.bigger * 1.6,
  },
  textEnd: {
    textAlign: 'center',
    color: colors.colorTextSecondary,
    fontSize: fonts.bigger,
  },
  textButton: {
    color: colors.colorPrimary,
    fontSize: fonts.medium,
  },
  buttonAlternative: {
    backgroundColor: colors.colorTextSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    height: metrics.screenHeight * 0.07,
    width: metrics.screenWidth * 0.4,
    borderRadius: metrics.baseRadius,
    marginBottom: metrics.doubleBaseMargin,
  },
  information: {
    flexDirection: 'row',
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
    width: metrics.screenWidth * 0.9,
    backgroundColor: colors.colorTextPrimary,
    borderColor: colors.colorSecondary,
    borderRadius: metrics.baseRadius,
  },
  textInformation: {
    flex: 1,
    textAlign: 'left',
    color: colors.colorTextSecondary,
    fontSize: fonts.medium,
    marginLeft: metrics.baseMargin,
  },
  animation: {
    width: 160,
    height: 160,
    alignSelf: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalView: {
    width: metrics.screenWidth * 0.9,
    height: metrics.screenHeight * 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.colorSecondaryLight,
    borderRadius: metrics.tripleBaseRadius,
  },
  modalTitle: {
    color: colors.colorPrimaryDark,
    fontWeight: 'bold',
    fontSize: fonts.regular,
  },
  modalSubTitle: {
    fontSize: fonts.small,
    width: metrics.screenWidth * 0.7,
  },
  buttonConcluded: {
    backgroundColor: colors.colorSucess,
    alignItems: 'center',
    justifyContent: 'center',
    height: metrics.screenHeight * 0.07,
    width: metrics.screenWidth * 0.4,
    borderRadius: metrics.baseRadius,
    elevation: metrics.baseElevation,
  },
  textBtnConcluded: {
    color: colors.colorTextSecondary,
    fontSize: fonts.medium,
  },
  buttonAbout: {
    alignItems: 'center',
    justifyContent: 'center',
    height: metrics.screenHeight * 0.05,
    width: metrics.screenWidth * 0.4,
    borderRadius: metrics.baseRadius,
  },
  textBtnAbout: {
    color: colors.colorPrimary,
    fontSize: fonts.small,
  },
  containerButtons: {
    justifyContent: 'space-between',
    flex: 0.55,
  },
  imgWin: {
    width: metrics.screenHeight * HEIGHT_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    alignSelf: 'center',
  },
  titleWeb: {
    color: colors.colorPrimary,
    textDecorationLine: 'underline',
  },
});

export default styles;
