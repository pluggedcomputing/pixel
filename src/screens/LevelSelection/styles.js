import {StyleSheet} from 'react-native';

import {metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: colors.colorSecondary,
  },
  scrollView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boxContainer: {
    margin: metrics.doubleBaseMargin,
    width: metrics.screenWidth * 0.4,
    height: metrics.screenHeight * 0.9,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imagePixel: {
    margin: metrics.smallMargin,
    width: metrics.screenWidth * 0.15,
    height: metrics.screenHeight * 0.1,
  },
});

export default styles;
