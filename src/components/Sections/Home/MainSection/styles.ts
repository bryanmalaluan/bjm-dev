import { scaleFont, scaleSize } from "@src/utils/dataFormat";
import { StyleSheet } from "react-native";

export const mainSectionStyles = StyleSheet.create({
  phoneImage: {
    position: "absolute",
    height: scaleSize(500),
    width: scaleSize(500),
    right: -scaleSize(200),
    top: scaleSize(50),
    backgroundColor: "transparent",
  },
  infoContainer: {
    height: scaleSize(500),
    width: "100%",
  },
  avatar: {
    height: scaleSize(80),
    width: scaleSize(80),
    maxHeight: 100,
    maxWidth: 100,
    borderRadius: scaleSize(40),
    marginLeft: 8,
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 8,
  },
  bottomText: {
    alignSelf: "flex-end",
    width: "80%",
    textAlign: "right",
    letterSpacing: 1.25,
    paddingBottom: scaleFont(32),
  },
});
