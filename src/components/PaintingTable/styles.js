import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../styles';

const HEIGTH_PERCENTE = 0.05;
const WIDTH_PERCENTE = 0.08;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderRadius: metrics.baseBorder,
    backgroundColor: colors.colorAccent,
    marginTop: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
  },
  subContainer: {
    flexDirection: 'row',
  },
  containerText: {
    marginLeft: metrics.smallMargin,
    marginRight: metrics.smallMargin,
    justifyContent: 'space-around',
  },
  square: {
    height: metrics.screenHeight * HEIGTH_PERCENTE,
    width: metrics.screenWidth * WIDTH_PERCENTE,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    borderWidth: 3,
    borderColor: colors.colorSecondary,
  },
  squareChoice: {
    borderWidth: metrics.baseBorder,
    borderColor: colors.colorSecondaryDark,
  },
  squareColoring: {backgroundColor: colors.colorBlack},
  discolorSquare: {backgroundColor: colors.colorAccent},
  squareRed: {backgroundColor: colors.colorError},
  squareGreen: {backgroundColor: colors.colorSucess},
  squareBlue: {backgroundColor: colors.colorBlue},
  containerChoiceColor: {
    marginTop: metrics.smallMargin,
    flexDirection: 'row',
  },
  text: {
    color: colors.colorTextPrimary,
    fontSize: fonts.small,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
  },
  containerFooter: {
    marginTop: metrics.baseMargin,
    width: metrics.screenWidth * 0.4,
  },
  containerTextModify: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerBoxColor: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default styles;
