import { SectionPageButton } from "@src/components/Buttons";
import { Column, SectionContainer } from "@src/components/Containers";
import SectionTitle from "@src/components/SectionTitle";
import React from "react";

interface ExperienceSectionProps {
  containerHeight: number;
}

const ExperienceSection = ({ containerHeight }: ExperienceSectionProps) => {
  return (
    <SectionContainer containerHeight={containerHeight}>
      <Column style={{ flex: 1, width: "100%" }}>
        <SectionTitle title="Experience" />
      </Column>

      <SectionPageButton />
    </SectionContainer>
  );
};

export default ExperienceSection;
