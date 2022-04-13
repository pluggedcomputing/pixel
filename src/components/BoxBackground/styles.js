import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.screenWidth * 0.9,
    minHeight: metrics.screenHeight * 0.4,
    backgroundColor: colors.colorSecondaryLight,
    borderRadius: metrics.baseRadius,
  },
  boxContainer: {
    width: metrics.screenWidth * 0.9,
    padding: metrics.smallPadding,
    alignItems: 'center',
  },
  groupContainerLeft: {
    flexDirection: 'row',
    transform: [{routate: '90'}],
  },
  groupContainer: {
    flexDirection: 'row',
  },
  imageContainer: {

  },
  slidder: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.colorSecondary,
    margin: metrics.doubleBaseMargin,
  },
});

export default styles;
