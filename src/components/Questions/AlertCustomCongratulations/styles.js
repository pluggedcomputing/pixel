import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  boxContainer: {
    backgroundColor: colors.colorTextSecondary,
    width: metrics.screenWidth * 0.75,
    height: metrics.screenHeight * 0.045,
    borderRadius: metrics.baseRadius,
    elevation: metrics.baseElevation,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.tripleBaseMargin,
  },
});

export default styles;
