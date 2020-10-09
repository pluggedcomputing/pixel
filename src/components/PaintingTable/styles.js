import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../styles';

const HEIGTH_PERCENTE = 0.03;
const WIDTH_PERCENTE = 0.06;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: colors.colorPrimary,
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
    margin: 1,
  },
  squareChoice: {
    borderWidth: metrics.smallBorder,
    borderColor: colors.colorAccent,
  },
  squareColoring: {backgroundColor: colors.colorTextPrimary},
  discolorSquare: {backgroundColor: colors.colorSecondaryLight},
  containerChoiceColor: {
    marginTop: metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.colorTextSecondary,
    fontSize: fonts.tiny,
  },
});

export default styles;
