import {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

export const useProfessionalSkillCardAnimation = ({
  startAnimation,
  duration,
  isValid,
}: {
  startAnimation: SharedValue<boolean>;
  duration: number;
  isValid: boolean;
}) => {
  const scale = useDerivedValue(() => {
    if (!startAnimation.value) {
      return 0;
    }
    return withTiming(1, { duration });
  });

  const animatedStyle = useAnimatedStyle(() => {
    const opacityValue = isValid ? 1 : 0.25;
    const opacity = interpolate(
      scale.value,
      [1, 0],
      [opacityValue, 0],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
      transform: [{ scale: scale.value }],
    };
  });

  return { animatedStyle };
};
