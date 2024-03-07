import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Row } from "@src/components/Containers";
import Text from "@src/components/Text";
import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import colors from "@src/theme/colors";
import React from "react";

interface ConnectItemProps {
  label: string;
  type: "email" | "linkedin" | "instagram";
  paddingTop?: number;
}

const ConnectItem = ({ label, type, paddingTop }: ConnectItemProps) => {
  const { scaleFont } = useResponsiveLayout();

  const icon = React.useMemo(() => {
    switch (type) {
      case "email":
        return (
          <MaterialIcons
            name="email"
            size={scaleFont(24)}
            color={colors["brand-light"]}
          />
        );

      case "instagram":
        return (
          <AntDesign
            name="instagram"
            size={scaleFont(24)}
            color={colors["brand-light"]}
          />
        );

      case "linkedin":
        return (
          <AntDesign
            name="linkedin-square"
            size={scaleFont(24)}
            color={colors["brand-light"]}
          />
        );

      default:
        return null;
    }
  }, [type, scaleFont]);

  return (
    <Row alignItems="center" style={{ paddingTop }}>
      {icon}

      <Text color="light" style={{ paddingLeft: 8 }}>
        {label}
      </Text>
    </Row>
  );
};

export default ConnectItem;
