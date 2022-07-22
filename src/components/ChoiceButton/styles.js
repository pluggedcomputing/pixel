import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const widhtScreen = 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: metrics.basePadding,
    width: metrics.screenWidth * widhtScreen,
  },
  button: {
    alignItems: 'center',
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
  },
  text: {
    color: colors.colorTextSecondary,
    fontSize: fonts.small,
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;