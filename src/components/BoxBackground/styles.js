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
  slidder: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.colorSecondary,
    margin: metrics.doubleBaseMargin,
  },
  arrowButton:{
    zIndex:1,
    borderWidth:1,
    padding:10,
    margin:10
  }
});

export default styles;
