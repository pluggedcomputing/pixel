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
    marginTop: metrics.doubleBaseMargin,
  },
  textTop: {
    flex: 4,
    textAlign: 'center',
    color: colors.colorTextSecondary,
    fontSize: fonts.bigger
  },
  textEnd: {
    flex:1,
    textAlign: 'center',
    color: colors.colorTextSecondary,
    fontSize: fonts.bigger * 1.6,
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
  },
  information: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInformation: {
    textAlign: 'left',
    color: colors.colorTextSecondary,
    fontSize: fonts.regular
  }
})

export default styles;