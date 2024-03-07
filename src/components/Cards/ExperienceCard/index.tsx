import { Column, Row } from "@src/components/Containers";
import Text from "@src/components/Text";
import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import colors from "@src/theme/colors";
import fonts from "@src/theme/fonts";
import React from "react";

import { experienceCardStyles } from "./styles";

const ExperienceCard = () => {
  const { scaleFont } = useResponsiveLayout();

  return (
    <Row justifyContent="center" style={{ width: "100%" }}>
      {/* company avatar here */}
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
        />

        <Column
          backgroundColor={colors.light}
          style={experienceCardStyles.lineIndicator}
        />
      </Column>

      <Column style={experienceCardStyles.subContainer}>
        <Column style={{ maxWidth: 475 }}>
          <Text color="light" fontFamily="SemiBold">
            Senior React Native Developer
          </Text>

          <Text
            color="brand-light"
            size="small"
            fontFamily="Medium"
            style={{ marginTop: 4 }}
          >
            First Table{" "}
            <Text
              color="brand-light"
              size="small"
              style={{ fontStyle: "italic" }}
            >
              (Oct. 2019 - Present)
            </Text>
          </Text>

          <Text
            color="light"
            size="small"
            lineHeight={fonts.size.small + 2}
            style={{ marginTop: 8 }}
          >
            I am the principal mobile developer. I constructed the application
            entirely using React-Native and TypeScript, then published it on the
            iOS App Store and Google Play Store. Additionally, I implemented
            unit testing.
          </Text>
        </Column>
      </Column>
    </Row>
  );
};

export default ExperienceCard;
