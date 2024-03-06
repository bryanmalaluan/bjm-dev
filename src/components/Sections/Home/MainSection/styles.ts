import { StyleSheet } from "react-native";

export const mainSectionStyles = StyleSheet.create({
  phoneImage: {
    position: "absolute",
    backgroundColor: "transparent",
  },
  infoContainer: {
    width: "100%",
  },
  avatar: {
    maxHeight: 100,
    maxWidth: 100,
    marginLeft: 8,
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 16,
  },
  bottomText: {
    alignSelf: "flex-end",
    width: "80%",
    textAlign: "right",
    letterSpacing: 1.5,
  },
});
