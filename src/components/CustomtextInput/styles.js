import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

const WIDTH_PORCENTAGE = 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  input: {
    flex: 2,
    color: colors.colorTextPrimary,
    fontSize: fonts.input,
    backgroundColor: colors.colorBackground,
  },

})

export default styles;