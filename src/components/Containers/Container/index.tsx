import React from "react";
import { FlexAlignType, ViewProps } from "react-native";
import styled from "styled-components/native";

import { JustifyContentType } from "../../types";

interface ContainerProps extends ViewProps {
  alignItems?: FlexAlignType;
  justifyContent?: JustifyContentType;
  backgroundColor?: string;
}

const StyledView = styled.View<ContainerProps>`
  flex: 1;
  align-items: ${(props) => props?.alignItems ?? "flex-start"};
  justify-content: ${(props) => props?.justifyContent ?? "flex-start"};
  background-color: ${(props) => props?.backgroundColor ?? "undefined"};
`;

const Container = (props: ContainerProps) => {
  return <StyledView {...props} />;
};

export default Container;
