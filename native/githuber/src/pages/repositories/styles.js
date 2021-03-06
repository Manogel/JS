import { StyleSheet } from "react-native";
import { metrics, colors } from "../../styles/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.regular
  },

  loading: {
    marginTop: metrics.baseMargin * 2
  }
});

export default styles;
