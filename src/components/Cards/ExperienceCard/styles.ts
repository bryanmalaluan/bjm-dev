import colors from "@src/theme/colors";
import { StyleSheet } from "react-native";

export const experienceCardStyles = StyleSheet.create({
  companyAvatar: {
    borderWidth: 2,
    borderColor: colors.light,
  },
  subContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 8,
  },
  lineIndicator: {
    flex: 0.9,
    width: 2,
    borderRadius: 100,
    opacity: 0.5,
    marginTop: 16,
  },
});
