import Ionicons from "@expo/vector-icons/Ionicons";
import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import colors from "@src/theme/colors";
import React from "react";

import { sectionPageButtonStyles } from "./styles";
import Pressable from "../Pressable";

interface SectionPageButtonProps {
  onPress?: () => void;
}

const SectionPageButton = ({ onPress }: SectionPageButtonProps) => {
  const { scaleFont } = useResponsiveLayout();

  return (
    <Pressable
      style={({ pressed }) => {
        return [
          sectionPageButtonStyles.container,
          {
            borderColor: pressed ? colors.dark : colors.light,
            backgroundColor: pressed ? colors.dark : undefined,
            borderRadius: scaleFont(60),
            height: scaleFont(60),
            width: scaleFont(60),
          },
        ];
      }}
      onPress={onPress}
    >
      <Ionicons
        name="chevron-down-outline"
        size={scaleFont(25)}
        color={colors.light}
      />
    </Pressable>
  );
};

export default SectionPageButton;
