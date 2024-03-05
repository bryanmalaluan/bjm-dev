import colors from "@src/theme/colors";
import { StyleSheet } from "react-native";

export const infoItemStyles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light,
  },
  label: {
    paddingLeft: 16,
    letterSpacing: 1.25,
  },
});