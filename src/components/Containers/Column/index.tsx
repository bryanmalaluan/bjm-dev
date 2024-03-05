import React from "react";
import { FlexAlignType, ViewProps } from "react-native";
import styled from "styled-components/native";

import { JustifyContentType } from "../../types";

interface ColumnProps extends ViewProps {
  alignItems?: FlexAlignType;
  justifyContent?: JustifyContentType;
  backgroundColor?: string;
}

const StyledView = styled.View<ColumnProps>`
  align-items: ${(props) => props?.alignItems ?? "flex-start"};
  justify-content: ${(props) => props?.justifyContent ?? "flex-start"};
  background-color: ${(props) => props?.backgroundColor ?? "undefined"};
`;

const Column = (props: ColumnProps) => {
  return <StyledView {...props} />;
};

export default Column;
