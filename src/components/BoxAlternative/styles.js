import { StyleSheet } from "react-native";

import { colors, metrics, fonts } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  containerBody: {
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
  },
  expandle: {height: metrics.screenHeight * 0.43, backgroundColor: colors.colorTextSecondary},
  hide: {height: metrics.screenHeight * 0.1},
  defaultText: {
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    textAlign: 'center',
    color: colors.colorTextSecondary,
    fontSize: fonts.small,
  },
});

export default styles;