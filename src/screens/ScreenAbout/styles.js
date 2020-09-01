import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';


const HEIGHT_PORCENTAGE = 0.2;
const WIDTH_PORCENTAGE = 0.3;


const styles = StyleSheet.create ({
boxBackGround: {
  alignSelf:'center',
},
container: {
  flex: 1,
  alignItems: 'center',
  width: metrics.screenWidth,
  justifyContent: 'space-around',
  backgroundColor: colors.colorPrimary,
},
credits: {
  color: colors.colorSecondary,
  textAlign: 'center',
  fontSize: fonts.small,
  padding: 3,
},
logo: {
  resizeMode: 'contain',
  width: metrics.screenWidth * WIDTH_PORCENTAGE,
  height: metrics.screenHeight * HEIGHT_PORCENTAGE,
},
textButton: {
  fontSize: fonts.regular,
  margin: metrics.baseMargin,
  alignSelf: 'center',
  color: colors.colorSecondary,
  textDecorationLine: 'underline',
},
textContent: {
  textAlign: 'center',
  margin: 20,
},
tankTetris: {
  resizeMode: 'contain',
  width: (metrics.screenWidth * WIDTH_PORCENTAGE) - 50,
  height: metrics.screenHeight * HEIGHT_PORCENTAGE,
},
})

export default styles
