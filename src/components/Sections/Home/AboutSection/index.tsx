import { SectionPageButton } from "@src/components/Buttons";
import { Column, SectionContainer } from "@src/components/Containers";
import { InfoItem } from "@src/components/Items";
import SectionTitle from "@src/components/SectionTitle";
import Text from "@src/components/Text";
import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import colors from "@src/theme/colors";
import fonts from "@src/theme/fonts";
import React from "react";

import { aboutSectionStyles } from "./styles";

interface AboutSectionProps {
  containerHeight: number;
  onPressNextPage?: () => void;
}

const AboutSection = ({
  containerHeight,
  onPressNextPage,
}: AboutSectionProps) => {
  const { scaleFont } = useResponsiveLayout();

  return (
    <SectionContainer
      containerHeight={containerHeight}
      backgroundColor={colors.dark}
    >
      <Column style={aboutSectionStyles.subContainer}>
        <SectionTitle title="About" />

        <Text
          color={colors.light}
          lineHeight={scaleFont(fonts.size.subHeading)}
          style={aboutSectionStyles.summaryText}
        >
          Experienced mobile developer with a proven track record of over 8
          years in designing, developing, and deploying robust mobile
          applications. Adept at leveraging the full potential of React Native
          framework to create efficient, scalable, and visually appealing
          cross-platform solutions. Well-versed in collaborating with
          cross-functional teams, including UI/UX designers and backend
          developers, to ensure seamless integration and optimal performance.
        </Text>

        <Column style={{ paddingVertical: 40 }}>
          <InfoItem label="Philippines" type="location" />
          <InfoItem
            label="bryanmalaluan@gmail.com"
            type="email"
            paddingTop={12}
          />
          <InfoItem label="+639276793202" type="phone" paddingTop={12} />
        </Column>

        <Column>
          <Text
            fontSize={scaleFont(fonts.size.large)}
            fontWeight="bold"
            color={colors.light}
            style={aboutSectionStyles.educationText}
          >
            Education
          </Text>

          <Text color={colors.light} style={aboutSectionStyles.courseText}>
            BS IN COMPUTER SCIENCE WITH SPECIALIZATION IN SOFTWARE ENGINEERING
          </Text>

          <Text
            fontSize={scaleFont(fonts.size.small)}
            fontWeight="bold"
            color={colors.light}
            style={{ letterSpacing: 1.25 }}
          >
            FEU Institute of Technology
          </Text>
        </Column>
      </Column>

      <SectionPageButton onPress={onPressNextPage} />
    </SectionContainer>
  );
};

export default AboutSection;
