import colors from "@src/theme/colors";
import { StyleSheet } from "react-native";

export const sectionPageButtonStyles = StyleSheet.create({
  container: {
    alignSelf: "center",
    maxHeight: 60,
    maxWidth: 60,
    borderWidth: 2,
    borderColor: colors.light,
    opacity: 0.5,
  },
});
