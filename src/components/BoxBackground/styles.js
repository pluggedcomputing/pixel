import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.screenWidth * 0.9,
    backgroundColor: colors.colorSecondaryLight,
    borderRadius: metrics.baseRadius,
  },
  boxContainer: {
    width: metrics.screenWidth * 0.9,
    padding: metrics.smallPadding,
    alignItems: 'center',
  },
  progressBar: {
    width: metrics.screenWidth * 0.85,
    borderWidth: 1,
    borderRadius: metrics.baseRadius,
    borderColor: colors.colorAccent,
    marginBottom: metrics.smallMargin,
  },
});

export default styles;
