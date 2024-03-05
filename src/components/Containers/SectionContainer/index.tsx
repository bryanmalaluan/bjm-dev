import React from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { sectionContainerStyles } from "./styles";
import Column from "../Column";

interface SectionContainerProps {
  containerHeight: number;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const SectionContainer = ({
  containerHeight,
  backgroundColor,
  children,
}: SectionContainerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Column
      alignItems="center"
      justifyContent="center"
      style={[
        sectionContainerStyles.container,
        {
          height: containerHeight,
          backgroundColor,
          paddingTop: Platform.select({ native: insets.top, web: 32 }),
          paddingBottom: Platform.select({ native: insets.top, web: 32 }),
        },
      ]}
    >
      <Column style={sectionContainerStyles.subContainer}>{children}</Column>
    </Column>
  );
};

export default SectionContainer;
