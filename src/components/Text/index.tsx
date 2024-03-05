import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import colors from "@src/theme/colors";
import fonts from "@src/theme/fonts";
import React from "react";
import { TextProps as RNTextProps } from "react-native";
import styled from "styled-components/native";

import { FontWeight } from "../types";

interface TextProps extends RNTextProps {
  fontSize?: number;
  fontWeight?: FontWeight;
  lineHeight?: number;
  color?: string;
  fontFamily?: string;
}

const StyledText = styled.Text<TextProps>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}px` : "undefined"};
  color: ${(props) => props.color ?? colors.dark};
`;

const Text = (props: TextProps) => {
  const { scaleFont } = useResponsiveLayout();

  const fontSize = props?.fontSize
    ? scaleFont(props.fontSize)
    : scaleFont(fonts.size.regular);

  return (
    <StyledText
      accessibilityRole="text"
      allowFontScaling={false}
      adjustsFontSizeToFit={false}
      {...props}
      fontSize={fontSize}
    />
  );
};

export default Text;
