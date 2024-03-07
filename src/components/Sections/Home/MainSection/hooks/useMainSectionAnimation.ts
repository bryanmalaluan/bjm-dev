import React from "react";
import { Platform } from "react-native";
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const useMainSectionAnimation = ({
  disabled,
}: {
  disabled: boolean;
}) => {
  const imageTranslateY = useSharedValue(-100);
  const imageTranslateX = useSharedValue(200);
  const detailsTranslateX = useSharedValue(-50);
  const bottomOpacity = useSharedValue(0);

  React.useEffect(() => {
    if (!disabled) {
      const imageAnimationDuration = Platform.OS === "web" ? 1500 : 2000;

      imageTranslateY.value = withTiming(0, {
        duration: imageAnimationDuration,
      });
      imageTranslateX.value = withTiming(
        0,
        {
          duration: imageAnimationDuration,
        },
        (finished) => {
          if (finished) {
            detailsTranslateX.value = withTiming(
              0,
              {
                duration: 500,
              },
              (finished) => {
                if (finished) {
                  bottomOpacity.value = withTiming(1, { duration: 500 });
                }
              },
            );
          }
        },
      );
    }
  }, [disabled]);

  const animatedImageStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      imageTranslateX.value,
      [0, 150, 200],
      [1, 0, 0],
      Extrapolation.CLAMP,
    );
    return {
      position: "absolute",
      opacity,
      transform: [
        {
          translateY: imageTranslateY.value,
        },
        {
          translateX: imageTranslateX.value,
        },
      ],
    };
  });

  const animatedDetailsStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      detailsTranslateX.value,
      [0, -50],
      [1, 0],
      Extrapolation.CLAMP,
    );
    return {
      opacity,
      transform: [{ translateX: detailsTranslateX.value }],
    };
  });

  const animatedBottomStyle = useAnimatedStyle(() => {
    return {
      opacity: bottomOpacity.value,
    };
  });

  return { animatedImageStyle, animatedDetailsStyle, animatedBottomStyle };
};
