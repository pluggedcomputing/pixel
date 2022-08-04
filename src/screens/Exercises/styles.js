import {StyleSheet} from 'react-native';

import {metrics, colors, fonts} from '../../styles';


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
    width: metrics.screenWidth*1.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colorAccent,
  },
  conteinerPaintTableQuestions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth*1.1,
    backgroundColor: colors.colorPrimary,
  },
  viewBoxContent: {
    flex: 1,
    justifyContent: 'center',
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
    alignItems: 'center',
    backgroundColor: colors.colorAccent,
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
    fontSize: fonts.regular *1.1,
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
