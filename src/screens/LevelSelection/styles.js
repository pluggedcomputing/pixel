import {StyleSheet} from 'react-native';

import {metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: colors.colorAccent,
  },
  boxContainer: {
    margin: metrics.baseMargin,
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.17,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;