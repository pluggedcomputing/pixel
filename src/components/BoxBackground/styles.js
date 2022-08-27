import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.screenWidth * 0.9,
    minHeight: metrics.screenHeight * 0.4,
    backgroundColor: colors.colorAccent,
    borderRadius: metrics.baseRadius,
  },
  boxContainer: {
    flex: 1,
    width: metrics.screenWidth * 0.9,
    padding: metrics.smallPadding,
    alignItems: 'center',
  },
  groupContainerLeft: {
    flexDirection: 'row',
    transform: [{routate: '90'}],
  },
  groupContainer: {
    flexDirection: 'row',
  },
  buttonImage:{
    position: 'absolute',
    bottom: 260,
    right: -10,
    justifyContent: 'space-between',
    alignItems:'center',
    padding: 20,
    zIndex:1,
  },
  buttonImageRotate:{
    position: 'absolute',
    bottom: 260,
    left: -10,
    padding: 20,
    transform: [{ rotate: '180deg' }],
    zIndex:10,
  },
  image: {
    left: 5,
  },
  image2: {
    right: -5,
  },
  slidder: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.colorSecondary,
    margin: metrics.doubleBaseMargin,
  }
});

export default styles;
