import {StyleSheet} from 'react-native';

import {colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: "center"
  },
  content: {
    flex: 1,
    width: metrics.screenWidth,
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
    fontSize: fonts.medium
  },
  buttonAlternative: {
    backgroundColor: colors.colorTextSecondary,
    alignItems: 'center',
    justifyContent: "center",
    height: metrics.screenHeight * 0.07,
    width: metrics.screenWidth * 0.4,
    borderRadius: metrics.baseRadius,
    marginBottom: metrics.doubleBaseMargin,
  },
  information: {
    flexDirection: 'row',
    margin: metrics.doubleBaseMargin,
    width: metrics.screenWidth * 0.9,
  },
  textInformation: {
    flex: 1,
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