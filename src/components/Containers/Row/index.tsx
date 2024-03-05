import React from "react";
import { FlexAlignType, ViewProps } from "react-native";
import styled from "styled-components/native";

import { JustifyContentType } from "../../types";

interface RowProps extends ViewProps {
  alignItems?: FlexAlignType;
  justifyContent?: JustifyContentType;
  backgroundColor?: string;
}

const StyledView = styled.View<RowProps>`
  flex-direction: row;
  align-items: ${(props) => props?.alignItems ?? "flex-start"};
  justify-content: ${(props) => props?.justifyContent ?? "flex-start"};
  background-color: ${(props) => props?.backgroundColor ?? "undefined"};
`;

const Row = (props: RowProps) => {
  return <StyledView {...props} />;
};

export default Row;
