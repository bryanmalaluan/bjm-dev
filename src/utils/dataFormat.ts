import { Dimensions, PixelRatio } from "react-native";

const HEIGHT = Dimensions.get("screen").height;

/**
 * use for responsive scaling of view size
 * depends on device width
 * base model width is iphone 14
 */
export const scaleSize = (size: number) => {
  const scale = HEIGHT / 844;
  const newSize = size * scale;

  const value = Math.round(PixelRatio.roundToNearestPixel(newSize));
  return value;
};

export const scaleFont = (size: number) => {
  const scale = HEIGHT / 844;
  const maxSize = size + 5;
  let newSize = size * scale;
  newSize = newSize > maxSize ? maxSize : newSize;

  const value = Math.round(PixelRatio.roundToNearestPixel(newSize));
  return value;
};
