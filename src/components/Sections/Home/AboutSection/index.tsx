import { SectionPageButton } from "@src/components/Buttons";
import { Column, SectionContainer } from "@src/components/Containers";
import { InfoItem } from "@src/components/Items";
import SectionTitle from "@src/components/SectionTitle";
import Text from "@src/components/Text";
import { userState$ } from "@src/legend-state/user";
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
  const user = userState$.user;

  const education = React.useMemo(() => {
    const userEducation = user.educations[0].get() ?? undefined;
    let course = "";
    let school = "";
    let year = "";

    if (userEducation) {
      course = `${userEducation.course} with ${userEducation.specialization}`;
      school = userEducation.school;

      const startDate = new Date(userEducation.startDate);
      const endDate = new Date(userEducation.endDate);
      year = `(${startDate.getFullYear().toString()} - ${endDate.getFullYear().toString()})`;
    }

    return { course, school, year };
  }, [user.educations.get()]);

  return (
    <SectionContainer
      containerHeight={containerHeight}
      backgroundColor={colors.dark}
    >
      <Column style={aboutSectionStyles.subContainer}>
        <SectionTitle title="About" />

        <Text
          color="light"
          lineHeight={fonts.size.regular + 4}
          style={aboutSectionStyles.summaryText}
        >
          {user.summary.get()}
        </Text>

        <Column style={{ paddingVertical: 40 }}>
          <InfoItem label={user.location.get()} type="location" />
          <InfoItem label={user.email.get()} type="email" paddingTop={12} />
          <InfoItem label={user.phone.get()} type="phone" paddingTop={12} />
        </Column>

        <Column>
          <Text
            size="large"
            fontFamily="SemiBold"
            color="light"
            style={aboutSectionStyles.educationText}
          >
            Education
          </Text>

          <Text
            color="light"
            lineHeight={fonts.size.regular + 2}
            style={aboutSectionStyles.courseText}
          >
            {education.course}
          </Text>

          <Text
            size="small"
            fontFamily="SemiBold"
            color="brand-light"
            style={{ letterSpacing: 1.5 }}
          >
            {education.school}{" "}
            <Text
              size="small"
              color="brand-light"
              style={{ fontStyle: "italic", letterSpacing: 1.5 }}
            >
              {education.year}
            </Text>
          </Text>
        </Column>
      </Column>

      <SectionPageButton onPress={onPressNextPage} />
    </SectionContainer>
  );
};

export default AboutSection;
