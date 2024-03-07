import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Column, Row } from "@src/components/Containers";
import Text from "@src/components/Text";
import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import colors from "@src/theme/colors";
import React from "react";

import { infoItemStyles } from "./styles";

interface InfoItemProps {
  label: string;
  type: "location" | "email" | "phone";
  paddingTop?: number;
}

const InfoItem = ({ label, type, paddingTop }: InfoItemProps) => {
  const { scaleFont } = useResponsiveLayout();

  const icon = React.useMemo(() => {
    switch (type) {
      case "email":
        return (
          <MaterialIcons
            name="email"
            size={scaleFont(18)}
            color={colors.dark}
          />
        );

      case "location":
        return (
          <Ionicons name="location" size={scaleFont(18)} color={colors.dark} />
        );

      case "phone":
        return (
          <FontAwesome name="phone" size={scaleFont(18)} color={colors.dark} />
        );

      default:
        return null;
    }
  }, [type, scaleFont]);

  return (
    <Row alignItems="center" style={{ paddingTop }}>
      <Column
        style={[
          infoItemStyles.iconContainer,
          {
            height: scaleFont(24),
            width: scaleFont(24),
            borderRadius: scaleFont(24),
          },
        ]}
      >
        {icon}
      </Column>

      <Text color="light" style={infoItemStyles.label}>
        {label}
      </Text>
    </Row>
  );
};

export default InfoItem;
