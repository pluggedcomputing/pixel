import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../styles';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: metrics.screenWidth,
    marginTop: metrics.doubleBaseMargin,
  },
  textTop: {
    textAlign: 'center',
    color: colors.colorTextPrimary,
    marginTop: 15,
    marginBottom: -10,
    fontSize: fonts.medium,
    fontFamily: 'Poppins-SemiBold',
  },
  textEnd: {
    textAlign: 'center',
    color: colors.colorTextPrimary,
    margin: -10,
    fontSize: fonts.medium * 1.6,
    fontFamily: 'Poppins-SemiBold',
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
    flexDirection: 'column',
    marginLeft: metrics.baseMargin * 6,
    marginBottom: 10,
    padding: metrics.basePadding,
    width: metrics.screenWidth * 0.7,
    height: metrics.screenHeight *0.12,
  },
  informationPosition:{
    flex: 0,
    position: 'relative',
    width: metrics.screenWidth
  },
  textInformation: {
    flex: 1,
    textAlign: 'left',
    color: colors.colorTextPrimary,
    fontSize: fonts.small,
    fontFamily: 'Poppins-Regular',
    padding: metrics.basePadding,
  },
  animation: {
    width: 160,
    height: 160,
    alignSelf: 'center',
  },
  imageWinner: {
    width: 260,
    height: 260,
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
    fontFamily: 'Poppin-Regular',
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
  titleWeb: {
    color: colors.colorPrimary,
    textDecorationLine: 'underline',
  },
});

export default styles;
