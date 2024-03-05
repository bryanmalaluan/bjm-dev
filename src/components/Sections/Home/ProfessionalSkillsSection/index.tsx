import { SectionPageButton } from "@src/components/Buttons";
import { Column, SectionContainer } from "@src/components/Containers";
import SectionTitle from "@src/components/SectionTitle";
import colors from "@src/theme/colors";
import React from "react";

interface ProfessionalSkillsSectionProps {
  containerHeight: number;
  onPressNextPage?: () => void;
}

const ProfessionalSkillsSection = ({
  containerHeight,
  onPressNextPage,
}: ProfessionalSkillsSectionProps) => {
  return (
    <SectionContainer
      containerHeight={containerHeight}
      backgroundColor={colors.dark}
    >
      <Column style={{ flex: 1, width: "100%" }}>
        <SectionTitle title="Professional Skills" />
      </Column>

      <SectionPageButton onPress={onPressNextPage} />
    </SectionContainer>
  );
};

export default ProfessionalSkillsSection;
