import colors from "@src/theme/colors";
import { scaleFont } from "@src/utils/dataFormat";
import { StyleSheet } from "react-native";

export const sectionPageButtonStyles = StyleSheet.create({
  container: {
    alignSelf: "center",
    height: scaleFont(60),
    width: scaleFont(60),
    maxHeight: 60,
    maxWidth: 60,
    borderRadius: scaleFont(60),
    borderWidth: 2,
    borderColor: colors.light,
    opacity: 0.5,
  },
});
