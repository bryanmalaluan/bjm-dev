import { PixelRatio, useWindowDimensions } from "react-native";

const useResponsiveLayout = () => {
  const { height } = useWindowDimensions();

  /**
   * use for responsive scaling of view size
   * depends on device width
   * base model width is iphone 14
   */
  const scaleSize = (size: number) => {
    const scale = height / 844;
    const newSize = size * scale;

    const value = Math.round(PixelRatio.roundToNearestPixel(newSize));
    return value;
  };

  const scaleFont = (size: number) => {
    const scale = height / 844;
    const maxSize = size + 5;
    let newSize = size * scale;
    newSize = newSize > maxSize ? maxSize : newSize;

    const value = Math.round(PixelRatio.roundToNearestPixel(newSize));
    return value;
  };

  return { scaleFont, scaleSize };
};

export default useResponsiveLayout;
