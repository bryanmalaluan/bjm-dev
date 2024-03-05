import { SectionPageButton } from "@src/components/Buttons";
import { Column, SectionContainer } from "@src/components/Containers";
import Text from "@src/components/Text";
import colors from "@src/theme/colors";
import fonts from "@src/theme/fonts";
import React from "react";

interface ProfessionalSkillsSectionProps {
  containerHeight: number;
}

const ProfessionalSkillsSection = ({
  containerHeight,
}: ProfessionalSkillsSectionProps) => {
  return (
    <SectionContainer
      containerHeight={containerHeight}
      backgroundColor={colors.dark}
    >
      <Column style={{ flex: 1, width: "100%" }}>
        <Text
          color={colors.light}
          fontSize={fonts.size.subHeading}
          fontWeight="bold"
          style={{
            alignSelf: "center",
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          Professional Skills
        </Text>
      </Column>

      <SectionPageButton />
    </SectionContainer>
  );
};

export default ProfessionalSkillsSection;
