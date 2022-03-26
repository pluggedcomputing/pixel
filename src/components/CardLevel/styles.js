import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    margin: metrics.baseMargin,
    width: metrics.screenWidth * 0.80,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.colorPrimary,
  },
  subcontainer:{
    flexDirection: 'column',
  },
  performanceConteiner: {
    width: metrics.screenWidth * 0.22,
    height: metrics.screenHeight * 0.12,
    backgroundColor: '#444444',
  },
  imageLevel: {
    flex: 3,
    margin: metrics.smallMargin,
    width: metrics.screenWidth * 0.4,
    height: metrics.screenHeight * 0.12,
    resizeMode: 'contain',
    zIndex: 1,
  },

  imageSubtract: {
    flex: 3,
    margin: metrics.smallMargin,
    width: metrics.screenWidth * 0.4,
    height: metrics.screenHeight * 0.12,
    resizeMode: 'contain',
    zIndex: 0,
  },

  textLevel: {
    flex: 1,
    fontSize: fonts.small,
    color: colors.colorTextPrimary,
  },

  textLevelBold: {
    flex: 1,
    fontSize: fonts.medium,
    color: colors.colorTextPrimary,
    fontWeight: 'bold',
  },
});

export default styles;
