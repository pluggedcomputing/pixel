import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.2;
const WIDTH_PORCENTAGE = 0.6;

const styles = StyleSheet.create({
  backgroundColor:{
    backgroundColor: colors.colorAccent,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: metrics.screenWidth,
    justifyContent: 'space-around',
    borderEndWidth: metrics.tripleBaseMargin,
    borderLeftWidth: metrics.tripleBaseMargin,
    borderColor: colors.colorAccent,
    backgroundColor: colors.colorAccent,
  },
  logo: {
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    resizeMode: 'contain',
  },
  text: {
    color: colors.colorTextPrimary,
    marginVertical: metrics.tripleBaseMargin,
    fontSize: fonts.small,
    fontFamily: 'Poppins-Light',
  },
  viewBoxContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContent: {
    padding: metrics.basePadding,
    fontSize: fonts.regular,
    textAlign: 'justify',
    color: colors.colorTextPrimary,
  },
  imgSite: {
    resizeMode: 'center',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * 0.1,
  },
  imgCenter: {
    resizeMode: 'center',
    width: metrics.screenWidth * 0.8,
    height: metrics.screenHeight * 0.15,
  },
  subContainerBoxContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
    width: metrics.screenWidth * 0.6,
  },
  btnApps: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.basePadding,
    backgroundColor: colors.colorAccent,
    width: metrics.screenWidth/2.4,
  },
});

export default styles;