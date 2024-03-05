import { SectionPageButton } from "@src/components/Buttons";
import { Column, SectionContainer } from "@src/components/Containers";
import SectionTitle from "@src/components/SectionTitle";
import colors from "@src/theme/colors";
import React from "react";

interface AboutSectionProps {
  containerHeight: number;
}

const AboutSection = ({ containerHeight }: AboutSectionProps) => {
  return (
    <SectionContainer
      containerHeight={containerHeight}
      backgroundColor={colors.dark}
    >
      <Column style={{ flex: 1, width: "100%" }}>
        <SectionTitle title="About" />
      </Column>

      <SectionPageButton />
    </SectionContainer>
  );
};

export default AboutSection;
