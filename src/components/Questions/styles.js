import {StyleSheet} from 'react-native';

import {metrics} from '../../styles';

const HEIGHT_PORCENTAGE = 0.3;
const WIDTH_PORCENTAGE = 0.5;

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight * WIDTH_PORCENTAGE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
  },
});

export default styles;
