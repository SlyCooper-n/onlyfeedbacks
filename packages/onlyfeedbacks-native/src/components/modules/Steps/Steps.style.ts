import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    marginBottom: 32,

    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },

  options: {
    width: "100%",
    marginBottom: 48,

    flexDirection: "row",
    justifyContent: "center",
  },

  formHeader: {
    position: "relative",
    marginBottom: 8,
    paddingHorizontal: 24,
    flexDirection: "row",
  },
  arrowLeft: {
    marginRight: -8,
  },
  formHeaderTitle: {
    flex: 1,
    paddingRight: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  formHeaderImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  formHeaderText: {
    fontSize: 20,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
  },
  formBody: {
    width: "100%",
    marginBottom: 28,
    paddingHorizontal: 24,
  },
  input: {
    height: 112,
    padding: 12,
    marginBottom: 8,

    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,

    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.stroke,
  },
  buttons: {
    flexDirection: "row",
  },
  sendBtnText: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_on_brand_color,
  },

  successHeader: {
    alignItems: "center",
  },
  successImg: {
    width: 36,
    height: 36,
    marginTop: 42,
    marginBottom: 10,
  },
  successText: {
    marginBottom: 24,

    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
  successBtn: {
    height: 40,
    marginBottom: 56,
    paddingHorizontal: 24,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
  },
  sendAnotherBtnText: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
});
