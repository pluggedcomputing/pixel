import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

const widhtScreen = 0.9

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: metrics.screenWidth * widhtScreen
  },

  button: {
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    padding: 10
  },
  text: {
    fontWeight: 'bold',
    color: colors.colorTextPrimary,
    textTransform: 'uppercase'
  }
})

export default styles;