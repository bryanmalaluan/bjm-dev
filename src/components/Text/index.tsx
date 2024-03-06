import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import colors from "@src/theme/colors";
import fonts from "@src/theme/fonts";
import React from "react";
import { TextProps as RNTextProps } from "react-native";
import styled from "styled-components/native";

import { FontFamily, FontSize, FontWeight } from "../types";

interface TextProps extends RNTextProps {
  size?: FontSize;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  lineHeight?: number;
  color?: string;
}

interface StyledTextProps extends TextProps {
  fontSize: number;
}

const StyledText = styled.Text<StyledTextProps>`
  font-size: ${(props) => props.fontSize}px;
  font-family: ${(props) => props?.fontFamily ?? "Regular"};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}px` : "undefined"};
  color: ${(props) => props.color ?? colors.dark};
`;

const Text = (props: TextProps) => {
  const { scaleFont } = useResponsiveLayout();

  const fontSize = props?.size
    ? scaleFont(fonts.size[props.size], props.size === "heading")
    : scaleFont(fonts.size.regular);

  const lineHeight = props?.lineHeight ? scaleFont(props.lineHeight) : fontSize;

  return (
    <StyledText
      accessibilityRole="text"
      allowFontScaling={false}
      adjustsFontSizeToFit={false}
      {...props}
      fontSize={fontSize}
      lineHeight={lineHeight}
    />
  );
};

export default Text;
