import {StyleSheet} from 'react-native';

import {colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'space-around',
  },
  content: {
    flex: 2,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    marginTop: metrics.doubleBaseMargin,
  },
  textTop: {
    textAlign: 'center',
    color: colors.colorTextSecondary,
    fontSize: fonts.bigger * 1.6,
  },
  textEnd: {
    textAlign: 'center',
    color: colors.colorTextSecondary,
    fontSize: fonts.bigger
  },
  textButton: {
    color: colors.colorPrimary,
    textDecorationLine: 'underline',
    fontSize: fonts.regular
  },
  buttonAlternative: {
    alignItems: 'center',
    marginTop: metrics.tripleBaseMargin,
    marginBottom: metrics.tripleBaseMargin,
  },
  information: {
    flexDirection: 'row',
    margin: metrics.doubleBaseMargin
  },
  textInformation: {
    textAlign: 'left',
    color: colors.colorTextSecondary,
    fontSize: fonts.medium,
    marginLeft: metrics.baseMargin
  },
  animation: {
    width: 160,
    height: 160,
    alignSelf: 'center'
  }
})

export default styles;