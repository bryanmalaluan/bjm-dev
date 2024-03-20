import Text from "@src/components/Text";
import { FontColor, FontSize } from "@src/components/types";
import colors from "@src/theme/colors";
import React from "react";
import { ActivityIndicator, FlexAlignType } from "react-native";

import { buttonStyles } from "./styles";
import Pressable from "../Pressable";

interface ButtonProps {
  label: string;
  labelSize?: FontSize;
  labelColor?: FontColor;
  alignSelf?: "auto" | FlexAlignType;
  borderWidth?: number;
  borderColor?: string;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({
  label,
  labelSize = "small",
  labelColor = "light",
  alignSelf,
  borderWidth = 2,
  borderColor = colors["brand-light"],
  loading,
  onPress,
}: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => {
        return [
          buttonStyles.container,
          { opacity: pressed ? 0.7 : 1, alignSelf, borderWidth, borderColor },
        ];
      }}
      disabled={loading}
      onPress={onPress}
    >
      {!loading ? (
        <Text
          size={labelSize}
          color={labelColor}
          fontFamily="Medium"
          style={{ letterSpacing: 1.25 }}
        >
          {label}
        </Text>
      ) : (
        <ActivityIndicator color={colors.light} />
      )}
    </Pressable>
  );
};

export default Button;
