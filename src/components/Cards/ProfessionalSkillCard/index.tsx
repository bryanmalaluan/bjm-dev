import { FontAwesome } from "@expo/vector-icons";
import { Row } from "@src/components/Containers";
import Text from "@src/components/Text";
import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import colors from "@src/theme/colors";
import fonts from "@src/theme/fonts";
import React from "react";
import Animated, { SharedValue } from "react-native-reanimated";

import { useProfessionalSkillCardAnimation } from "./hooks/useProfessionalSkillCardAnimation";
import { professionalSkillCardStyles } from "./styles";

interface ProfessionalSkillCardProps {
  label: string;
  rating: number;
  startAnimation: SharedValue<boolean>;
}

interface RatingProps {
  value: number;
  rating: number;
  startAnimation: SharedValue<boolean>;
}

const Rating = ({ value, rating, startAnimation }: RatingProps) => {
  const { scaleFont } = useResponsiveLayout();
  const isValid = value <= rating;
  const color = isValid ? colors["nude-medium"] : colors.light;

  const { animatedStyle } = useProfessionalSkillCardAnimation({
    startAnimation,
    duration: value * 500,
    isValid,
  });

  return (
    <Animated.View style={[{ paddingHorizontal: 2 }, animatedStyle]}>
      <FontAwesome name="star" size={scaleFont(22)} color={color} />
    </Animated.View>
  );
};

const ProfessionalSkillCard = ({
  label,
  rating,
  startAnimation,
}: ProfessionalSkillCardProps) => {
  return (
    <Animated.View style={professionalSkillCardStyles.container}>
      <Row alignItems="center" style={{ paddingBottom: 8 }}>
        {[1, 2, 3, 4, 5].map((value) => {
          return (
            <Rating
              key={`rating-${value}`}
              value={value}
              rating={rating}
              startAnimation={startAnimation}
            />
          );
        })}
      </Row>

      <Text
        color="light"
        lineHeight={fonts.size.regular + 2}
        style={{ flex: 1, textAlign: "center" }}
      >
        {label}
      </Text>
    </Animated.View>
  );
};

export default ProfessionalSkillCard;
