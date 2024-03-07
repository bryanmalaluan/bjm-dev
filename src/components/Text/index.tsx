import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import colors from "@src/theme/colors";
import fonts from "@src/theme/fonts";
import React from "react";
import { TextProps as RNTextProps } from "react-native";
import styled from "styled-components/native";

import { FontColor, FontFamily, FontSize, FontWeight } from "../types";

interface TextProps extends RNTextProps {
  color?: FontColor;
  size?: FontSize;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  lineHeight?: number;
}

interface StyledTextProps extends TextProps {
  fontSize: number;
  textColor: string;
}

const StyledText = styled.Text<StyledTextProps>`
  font-size: ${(props) => props.fontSize}px;
  font-family: ${(props) => props?.fontFamily ?? "Regular"};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}px` : "undefined"};
  color: ${(props) => props.textColor};
`;

const Text = (props: TextProps) => {
  const { scaleFont } = useResponsiveLayout();

  const color = props?.color ? colors[props.color].toString() : colors.dark;

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
      textColor={color}
      fontSize={fontSize}
      lineHeight={lineHeight}
    />
  );
};

export default Text;
