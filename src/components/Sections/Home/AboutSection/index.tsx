import { SectionPageButton } from "@src/components/Buttons";
import { Column, SectionContainer } from "@src/components/Containers";
import SectionTitle from "@src/components/SectionTitle";
import colors from "@src/theme/colors";
import React from "react";

interface AboutSectionProps {
  containerHeight: number;
  onPressNextPage?: () => void;
}

const AboutSection = ({
  containerHeight,
  onPressNextPage,
}: AboutSectionProps) => {
  return (
    <SectionContainer
      containerHeight={containerHeight}
      backgroundColor={colors.dark}
    >
      <Column style={{ flex: 1, width: "100%" }}>
        <SectionTitle title="About" />
      </Column>

      <SectionPageButton onPress={onPressNextPage} />
    </SectionContainer>
  );
};

export default AboutSection;
