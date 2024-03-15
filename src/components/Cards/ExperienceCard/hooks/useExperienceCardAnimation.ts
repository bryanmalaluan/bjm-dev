import {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

const useExperienceCardAnimation = ({
  startAnimation,
  duration,
}: {
  startAnimation: SharedValue<boolean>;
  duration: number;
}) => {
  const translateY = useDerivedValue(() => {
    return startAnimation.value
      ? withTiming(0, { duration: duration + 800 })
      : 100;
  });

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [0, 75, 100],
      [1, 0, 0],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
      transform: [{ translateY: translateY.value }],
    };
  });

  return { animatedStyle };
};

export default useExperienceCardAnimation;
