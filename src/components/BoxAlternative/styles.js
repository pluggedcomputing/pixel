import { StyleSheet } from "react-native";

import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  containerBody: {
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
    backgroundColor: colors.colorSecondaryLight,
  },
  expandle: {height: metrics.screenHeight * 0.43},
  hide: {height: metrics.screenHeight * 0.1},
  defaultText: {
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    textAlign: 'center',
    color: colors.colorTextPrimary,
  },
});

export default styles;