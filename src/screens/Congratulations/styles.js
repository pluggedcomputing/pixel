import {StyleSheet} from 'react-native';

import {colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    marginTop: 30,
  },
  textTop: {
    flex: 4,
    textAlign: 'center',
    color: colors.colorTextSecondary,
    fontSize: metrics.screenWidth * 0.07
  },
  textEnd: {
    flex:1,
    textAlign: 'center',
    color: colors.colorTextSecondary,
    fontSize: metrics.screenWidth * 0.140,
  },
  textButton: {
    color: colors.colorPrimary,
    textDecorationLine: 'underline',
    fontSize: fonts.regular
  },
  buttonAlternative: {
    alignItems: 'center',
    marginTop: metrics.smallMargin,
    marginBottom: metrics.smallMargin,
  }
})

export default styles;