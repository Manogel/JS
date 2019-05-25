import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
    justifyContent: "center",
    alignItems: "stretch"
  },

  title: {
    textAlign: "center",
    color: colors.white,
    marginBottom: 30,
    fontSize: 24,
    fontWeight: "bold"
  },

  title2: {
    textAlign: "center",
    fontSize: 15,
    color: colors.light,
    lineHeight: 21
  },

  error: {
    color: colors.danger,
    fontSize: 14,
    textAlign: "center",
    marginTop: metrics.baseMargin
  },

  form: {
    marginTop: metrics.baseMargin * 2
  },

  input: {
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.white
  },

  button: {
    backgroundColor: colors.primary,
    marginTop: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
    height: 44,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: colors.white,
    fontSize: 16
  }
});

export default styles;
