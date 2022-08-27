import {StyleSheet} from 'react-native';

import {metrics, colors, fonts} from '../../styles';


const styles = StyleSheet.create({
  containerText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
    backgroundColor: colors.colorAccent,
  },
  containerQuestions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
    backgroundColor: colors.colorPrimary,
  },
  screen: {
    width: metrics.screenWidth*1.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: metrics.screenWidth,
    top: 35,
    backgroundColor: 'transparent',
  },
  headerStyleText: {
    color: colors.colorTextPrimary,
    fontFamily:'Poppins-Bold',
    fontSize: 18,
    left: 15,
    marginBottom: -5,
    top: 5,
  },
  headerStyleButton:{
    display: 'flex',
    backgroundColor: 'transparent',
    padding: 6,
    left: 140,
  },
  conteinerPaintTableQuestions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth*1.1,
    backgroundColor: 'transparent',
  },
  viewBoxContent: {
    flex: 1,
    justifyContent: 'center',
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  statementImage: {
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    width: Math.round((metrics.screenWidth * 14) / 16),
    height: metrics.screenHeight * 0.32,
    marginTop: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin * 2,
  },
  contentText: {
    flex: 1,
    fontSize: fonts.regular*1.12,
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
    marginLeft: metrics.smallMargin,
    marginRight: metrics.smallMargin,
    color: colors.colorTextPrimary,
    fontFamily: 'Poppins-Ligth',
  },
  textAnswer: {
    fontSize: fonts.regular,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    color: colors.colorSecondary,
    fontWeight: 'bold',
  },
  contentContainerStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: metrics.baseMargin*2,
  },
});

export default styles;
