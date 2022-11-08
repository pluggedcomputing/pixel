import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 10,
  },
  containerBody: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: metrics.screenWidth,
  },
  expandle: {
    height: metrics.screenHeight * 0.40,
    backgroundColor: 'transparent',
  },
  hide: {height: metrics.screenHeight * 0.1},
  defaultText: {
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: colors.colorTextSecondary,
    fontSize: fonts.small,
  },
});

export default styles;
