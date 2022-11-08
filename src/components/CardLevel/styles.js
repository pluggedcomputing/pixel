import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight * 0.15,
    width: metrics.screenWidth * 0.80,
    margin: metrics.baseMargin,
  },
  subContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor: colors.colorPrimary,
    borderRadius: metrics.baseRadius,
  },
  imageLevel: {
    flex: 3,
    margin: metrics.smallMargin,
    width: metrics.screenWidth * 0.20,
    resizeMode: 'contain',
  },
  textLevel: {
    fontSize: fonts.title,
    fontFamily: 'Poppins-Bold',
    color: colors.colorTextPrimary,
    textTransform:'uppercase'
  },
  bio:{
    color: colors.colorTextPrimary,
    fontSize:fonts.regular,
    maxWidth:140,
  },
});

export default styles;