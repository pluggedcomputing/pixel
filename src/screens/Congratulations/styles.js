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
    alignItems:'center'
  },
  textTop: {
    textAlign: 'center',
    color: colors.colorTextPrimary,
    marginTop: 15,
    marginBottom: 5,
    fontSize: fonts.header,
    fontFamily: 'Poppins-SemiBold',
  },
  textEnd: {
    textAlign: 'center',
    color: colors.colorTextPrimary,
    marginLeft: 100,
    marginRight: 100,
    fontSize: fonts.regular,
    fontFamily: 'Poppins-Regular',
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
    width: metrics.screenWidth * 0.80
  },
  textInformation: {
    flex: 1,
    textAlign: 'left',
    color: colors.colorTextPrimary,
    fontSize: fonts.regular,
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
    width: metrics.screenWidth * 0.90,
    height: metrics.screenHeight * 0.50,
    alignSelf: 'center',
    resizeMode: 'cover',
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
    position:'relative',
    paddingVertical:15,
    width:metrics.screenWidth,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center",
  },
  buttonConcluded: {
    position:'absolute',
    right:10
  },
  textBtnConcluded: {
    color: colors.colorSecondary,
    fontSize: fonts.regular,
    fontWeight: 'bold',
    fontFamily: 'Poppin-Bold',
    justifyContent: 'center',
  },
  iconConcluded: {
    color: colors.colorSecondary,
    fontSize: fonts.header*1.2,
    fontFamily: 'Poppin-Regular',
  },
});

export default styles;
