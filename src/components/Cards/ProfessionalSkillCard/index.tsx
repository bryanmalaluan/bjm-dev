import { FontAwesome } from "@expo/vector-icons";
import { Column, Row } from "@src/components/Containers";
import Text from "@src/components/Text";
import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import colors from "@src/theme/colors";
import fonts from "@src/theme/fonts";
import React from "react";

interface ProfessionalSkillCardProps {
  label: string;
  rating: number;
}

const ProfessionalSkillCard = ({
  label,
  rating,
}: ProfessionalSkillCardProps) => {
  const { scaleFont } = useResponsiveLayout();

  const stars = React.useMemo(() => {
    return [1, 2, 3, 4, 5].map((r) => {
      const color = r <= rating ? colors["nude-medium"] : colors.light;
      const opacity = r <= rating ? 1 : 0.25;

      return (
        <FontAwesome
          key={`rating-${r}`}
          name="star"
          size={scaleFont(22)}
          color={color}
          style={{ opacity, paddingHorizontal: 2 }}
        />
      );
    });
  }, [rating, scaleFont]);

  return (
    <Column alignItems="center" style={{ flex: 1 }}>
      <Row alignItems="center" style={{ paddingBottom: 8 }}>
        {stars}
      </Row>

      <Text
        color="light"
        lineHeight={fonts.size.regular + 2}
        style={{ flex: 1, textAlign: "center" }}
      >
        {label}
      </Text>
    </Column>
  );
};

export default ProfessionalSkillCard;
