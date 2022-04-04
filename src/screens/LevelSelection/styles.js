import {StyleSheet} from 'react-native';

import {metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: colors.colorAccent,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  boxContainer: {
    margin: metrics.baseMargin,
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.18,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default styles;