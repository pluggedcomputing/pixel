import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../styles';

const WIDTH_PORCENTAGE = 1;

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
    marginBottom: 5,
    fontSize: fonts.regular,
    fontFamily: 'Poppins-Bold',
  },
  textEnd: {
    textAlign: 'center',
    color: colors.colorTextPrimary,
    margin: -10,
    fontSize: fonts.medium * 1.6,
    fontFamily: 'Poppins-SemiBold',
  },
  button: {
    color: colors.colorSecondary,
    fontSize: fonts.medium,
  },
  buttonsShare:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colorSecondary,
    color: colors.colorAccent,
    width: 55,
    height: 55,
    borderRadius: 300,
  },
  boxButtons:{
    flexDirection: 'row',
    display: 'flex',
    flex: 0.2,
    alignItems: 'center',
    justifyContent:'space-around',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
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
    fontSize: fonts.medium,
    fontFamily: 'Poppins-Regular',
    padding: metrics.basePadding,
    position: 'absolute',
  },
  textBtn:{
    flex: 1,
    textAlign: 'center',
    color: colors.colorTextPrimary,
    fontFamily: 'Poppins-Regular',
    padding: metrics.basePadding,
  },
  textAndBtn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageWinner: {
    width: 300,
    height: 300,
    alignSelf: 'center',
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
  containerBtnConcluded: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    left: metrics.baseMargin*8,
  },
  buttonConcluded: {
    backgroundColor: colors.colorPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    height: metrics.screenHeight * 0.07,
    width: metrics.screenWidth * 0.4,
    borderRadius: metrics.baseRadius,
    left: metrics.baseMargin*5,
  },
  textBtnConcluded: {
    color: colors.colorSecondary,
    fontSize: fonts.header,
    fontWeight: 'bold',
    fontFamily: 'Poppin-Bold',
    justifyContent: 'center',
    margin: metrics.baseMargin,
    marginTop: 4,
  },
  iconConcluded: {
    color: colors.colorSecondary,
    fontSize: fonts.header*1.2,
    fontFamily: 'Poppin-Regular',
    margin: metrics.baseMargin*0.9,
  }
});

export default styles;
