import { StyleSheet } from "react-native";
import { metrics, colors } from "../../styles/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.regular
  },

  loading: {
    marginTop: metrics.baseMargin * 2
  },
  columns: {
    marginHorizontal: metrics.baseMargin * 2,
    justifyContent: "space-between"
  },
  containerError: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: metrics.baseMargin * 2,
    flexDirection: "column"
  },
  titleError: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: "bold",
    padding: metrics.basePadding * 2,
    textAlign: "center",
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 2,
  }
});

export default styles;
