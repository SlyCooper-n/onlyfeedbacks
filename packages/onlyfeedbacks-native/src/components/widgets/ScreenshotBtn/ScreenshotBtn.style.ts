import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 40,
    height: 40,
    marginRight: 8,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
  },

  removeIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },

  screenshotImage: {
    width: 40,
    height: 40,
  },
});
