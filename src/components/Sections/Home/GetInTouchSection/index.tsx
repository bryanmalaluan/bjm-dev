import { SectionContainer } from "@src/components/Containers";
import Text from "@src/components/Text";
import colors from "@src/theme/colors";
import fonts from "@src/theme/fonts";
import React from "react";

interface GetInTouchSectionProps {
  containerHeight: number;
}

const GetInTouchSection = ({ containerHeight }: GetInTouchSectionProps) => {
  return (
    <SectionContainer containerHeight={containerHeight}>
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
        Get In Touch
      </Text>
    </SectionContainer>
  );
};

export default GetInTouchSection;
