import { Column } from "@src/components/Containers";
import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import React from "react";

import { sectionPageButtonStyles } from "./styles";

const SectionPageButton = () => {
  const { scaleFont } = useResponsiveLayout();

  return (
    <Column
      style={[
        sectionPageButtonStyles.container,
        {
          borderRadius: scaleFont(60),
          height: scaleFont(60),
          width: scaleFont(60),
        },
      ]}
    />
  );
};

export default SectionPageButton;
