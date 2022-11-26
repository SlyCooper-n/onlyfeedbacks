import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 112,
    marginHorizontal: 8,
    padding: 8,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 8,
  },

  image: {
    width: 40,
    height: 40,
  },

  title: {
    fontSize: 14,
    marginTop: 8,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
});
