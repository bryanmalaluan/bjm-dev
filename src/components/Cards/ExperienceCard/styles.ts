import colors from "@src/theme/colors";
import { StyleSheet } from "react-native";

export const experienceCardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  companyAvatar: {
    borderWidth: 2,
    borderColor: colors.light,
    overflow: "hidden",
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
