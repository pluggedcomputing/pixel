import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

const widhtScreen = 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: metrics.basePadding,
    width: metrics.screenWidth * widhtScreen,
    elevation: metrics.baseElevation,
  },

  button: {
    alignItems: 'center',
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    borderWidth: metrics.baseBorder,
  },
  text: {
    fontWeight: 'bold',
    color: colors.colorTextPrimary,
  },
});

export default styles;
