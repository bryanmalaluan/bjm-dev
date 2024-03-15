import { Experience } from "@src/api/types";
import { Column, Row } from "@src/components/Containers";
import Image from "@src/components/Image";
import Text from "@src/components/Text";
import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import colors from "@src/theme/colors";
import fonts from "@src/theme/fonts";
import React from "react";

import { experienceCardStyles } from "./styles";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { scaleFont } = useResponsiveLayout();

  const yearAttended = React.useMemo(() => {
    const startDate = new Date(experience.startDate);
    const endDate = experience.endDate
      ? new Date(experience.endDate)
      : undefined;
    const endDateMonth = endDate ? endDate.getMonth() : 0;

    const endDateText = experience.isCurrent
      ? "Present"
      : `${endDateMonth + 1}/${endDate?.getFullYear()}`;

    return `(${startDate.getMonth() + 1}/${startDate.getFullYear()} - ${endDateText})`;
  }, [experience.startDate, experience.endDate, experience.isCurrent]);

  return (
    <Row justifyContent="center" style={{ width: "100%" }}>
      <Column alignItems="center" style={{ height: "100%" }}>
        <Column
          alignItems="center"
          justifyContent="center"
          style={[
            experienceCardStyles.companyAvatar,
            {
              height: scaleFont(50),
              width: scaleFont(50),
              borderRadius: scaleFont(50),
            },
          ]}
        >
          <Image
            source={{ uri: experience.image }}
            style={{
              height: scaleFont(42),
              width: scaleFont(42),
              borderRadius: scaleFont(42),
            }}
          />
        </Column>

        <Column
          backgroundColor={colors.light}
          style={experienceCardStyles.lineIndicator}
        />
      </Column>

      <Column style={experienceCardStyles.subContainer}>
        <Column style={{ maxWidth: 475 }}>
          <Text color="light" fontFamily="SemiBold">
            {experience.jobTitle}
          </Text>

          <Text
            color="brand-light"
            size="small"
            fontFamily="Medium"
            style={{ marginTop: 4 }}
          >
            {experience.company}{" "}
            <Text
              color="brand-light"
              size="small"
              style={{ fontStyle: "italic" }}
            >
              {yearAttended}
            </Text>
          </Text>

          <Text
            color="light"
            size="small"
            lineHeight={fonts.size.small + 2}
            style={{ marginTop: 8 }}
          >
            {experience.summary}
          </Text>
        </Column>
      </Column>
    </Row>
  );
};

export default ExperienceCard;
