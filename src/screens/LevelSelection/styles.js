import {StyleSheet} from 'react-native';

import {metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: colors.colorAccent,
  },
  boxContainer: {
    marginTop: 20,
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.14,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default styles;