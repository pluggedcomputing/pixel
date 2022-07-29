import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

const HEIGHT_PORCENTAGE = 0.3;
const WIDTH_PORCENTAGE = 0.5;

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    alignItems: 'center',
    backgroundColor: colors.colorAccent,
  },
  logo: {
    resizeMode: 'contain',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
  },
});

export default styles;
