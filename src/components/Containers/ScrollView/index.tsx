import React from "react";
import { ScrollViewProps } from "react-native";
import styled from "styled-components/native";

import { scrollViewStyles } from "./styles";

const StyledScrollView = styled.ScrollView``;

const ScrollView = (props: ScrollViewProps) => {
  return (
    <StyledScrollView
      scrollEventThrottle={32}
      style={scrollViewStyles.style}
      contentContainerStyle={scrollViewStyles.contentContainerStyle}
      {...props}
    />
  );
};

export default ScrollView;
