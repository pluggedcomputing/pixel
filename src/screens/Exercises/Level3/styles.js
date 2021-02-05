import {StyleSheet} from 'react-native';

import {metrics, colors, fonts} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
    backgroundColor: colors.colorPrimary,
  },
  halfTopView: {
    flex: 1,
    alignItems: 'center',
    width: metrics.screenWidth,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
  },
  textAnswer: {
    fontSize: fonts.small,
    marginTop: metrics.smallMargin,
    color: colors.colorSecondaryDark,
    fontWeight: 'bold',
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: metrics.baseMargin,
  },
  boxContainer: {
    flex: 1,
  },
  containerOfContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  contentText: {textAlign: 'center', fontSize: fonts.small, paddingHorizontal: metrics.basePadding, color: colors.colorTextPrimary},
});

export default styles;
