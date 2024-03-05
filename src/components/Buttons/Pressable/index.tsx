import React from "react";
import { PressableProps as RNPRessableProps } from "react-native";
import styled from "styled-components/native";

interface PressableProps extends RNPRessableProps {}

const StyledPressable = styled.Pressable<PressableProps>``;

const Pressable = (props: PressableProps) => {
  return <StyledPressable accessibilityRole="button" {...props} />;
};

export default Pressable;
