import React from "react";
import { ImageProps as RNImageProps } from "react-native";
import styled from "styled-components/native";

interface ImageProps extends RNImageProps {}

const StyledImage = styled.Image<ImageProps>``;

const Image = (props: ImageProps) => {
  return <StyledImage accessibilityRole="image" {...props} />;
};

export default Image;
