import * as Images from "@src/assets/images";
import { SectionPageButton } from "@src/components/Buttons";
import { Column, Row, SectionContainer } from "@src/components/Containers";
import Image from "@src/components/Image";
import Text from "@src/components/Text";
import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import colors from "@src/theme/colors";
import fonts from "@src/theme/fonts";
import React from "react";

import { mainSectionStyles } from "./styles";

interface MainSectionProps {
  containerHeight: number;
}

const MainSection = ({ containerHeight }: MainSectionProps) => {
  const { scaleSize } = useResponsiveLayout();

  return (
    <SectionContainer containerHeight={containerHeight}>
      <Image
        source={Images.Phone}
        style={[
          mainSectionStyles.phoneImage,
          {
            height: scaleSize(500),
            width: scaleSize(500),
            right: -scaleSize(200),
            top: scaleSize(50),
          },
        ]}
      />

      <Row
        style={[mainSectionStyles.infoContainer, { height: scaleSize(500) }]}
      >
        <Column style={{ flex: 0.7 }}>
          <Image
            source={undefined}
            style={[
              mainSectionStyles.avatar,
              {
                height: scaleSize(80),
                width: scaleSize(80),
                borderRadius: scaleSize(40),
              },
            ]}
          />

          <Text
            color={colors.light}
            fontSize={fonts.size.heading}
            fontWeight="bold"
            style={{
              textTransform: "uppercase",
              letterSpacing: 1.25,
              marginTop: 8,
            }}
          >
            Bryan James Malaluan
          </Text>

          <Text
            color={colors.brand.light}
            fontSize={fonts.size.subHeading}
            fontWeight="bold"
            style={{
              textTransform: "uppercase",
              letterSpacing: 1.25,
              marginTop: 8,
            }}
          >
            Mobile App Developer
          </Text>
        </Column>
      </Row>

      <Column
        justifyContent="space-between"
        style={mainSectionStyles.bottomContainer}
      >
        <Text
          color={colors.light}
          fontSize={fonts.size.subHeading}
          fontWeight="bold"
          style={mainSectionStyles.bottomText}
        >
          Transforming ideas into seamless mobile experiences is my passion and
          profession
        </Text>

        <SectionPageButton />
      </Column>
    </SectionContainer>
  );
};

export default MainSection;
