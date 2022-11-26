import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    backgroundColor: theme.colors.brand,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  containerDisabled: {
    opacity: 0.6,
  },
});
