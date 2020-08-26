import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';


const HEIGHT_PORCENTAGE = 0.2;
const WIDTH_PORCENTAGE = 0.3;


const styles = StyleSheet.create ({
container: {
  flex: 1,
  width: metrics.screenWidth,
  justifyContent: 'space-around',
  backgroundColor: colors.colorPrimary,
},
credits: {
  color: colors.colorSecondary,
  textAlign: 'center',
  padding: 3
},
header: {
  flexDirection: 'row',
  justifyContent: 'space-around'
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
},
})

export default styles
