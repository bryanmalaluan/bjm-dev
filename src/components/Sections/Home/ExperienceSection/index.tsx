import { SectionPageButton } from "@src/components/Buttons";
import { Column, SectionContainer } from "@src/components/Containers";
import SectionTitle from "@src/components/SectionTitle";
import React from "react";

interface ExperienceSectionProps {
  containerHeight: number;
  onPressNextPage?: () => void;
}

const ExperienceSection = ({
  containerHeight,
  onPressNextPage,
}: ExperienceSectionProps) => {
  return (
    <SectionContainer containerHeight={containerHeight}>
      <Column style={{ flex: 1, width: "100%" }}>
        <SectionTitle title="Experience" />
      </Column>

      <SectionPageButton onPress={onPressNextPage} />
    </SectionContainer>
  );
};

export default ExperienceSection;
