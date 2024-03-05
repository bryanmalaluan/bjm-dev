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

const StyledText = styled.Text`
  font-size: ${(props: TextProps) => props.fontSize ?? fonts.size.regular}px;
  font-weight: ${(props: TextProps) => props.fontWeight ?? "normal"};
  line-height: ${(props: TextProps) =>
    props.lineHeight ? `${props.lineHeight}px` : "undefined"};
  color: ${(props: TextProps) => props.color ?? colors.dark};
`;

const Text = (props: TextProps) => {
  return (
    <StyledText
      accessibilityRole="text"
      allowFontScaling={false}
      adjustsFontSizeToFit={false}
      {...props}
    />
  );
};

export default Text;
