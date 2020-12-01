import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
    backgroundColor: colors.colorPrimary,
  },
  containerHeader: {
    flex: 1,
    alignItems: 'center',
    width: metrics.screenWidth,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
  },
  containerBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
    backgroundColor: colors.colorSecondaryLight,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentContainerStyle: {
    justifyContent: 'center',
  },
  boxContainer: {
    flex: 1,
  },
  containerOfContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
  contentText: {textAlign: 'center'},
  img: {
    width: metrics.screenWidth * 0.4,
    height: metrics.screenHeight * 0.17,
  },
});

export default styles;
