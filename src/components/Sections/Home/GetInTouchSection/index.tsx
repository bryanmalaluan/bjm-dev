import { Column, SectionContainer } from "@src/components/Containers";
import { ConnectItem } from "@src/components/Items";
import SectionTitle from "@src/components/SectionTitle";
import Text from "@src/components/Text";
import fonts from "@src/theme/fonts";
import React from "react";

import { getInTouchSectionStyles } from "./styles";

interface GetInTouchSectionProps {
  containerHeight: number;
}

const GetInTouchSection = ({ containerHeight }: GetInTouchSectionProps) => {
  return (
    <SectionContainer containerHeight={containerHeight}>
      <SectionTitle title="Get In Touch" />

      <Text
        color="light"
        size="large"
        lineHeight={fonts.size.large + 4}
        style={getInTouchSectionStyles.summaryText}
      >
        Thank you for taking the time to review my portfolio. If you have any
        questions, inquiries, or would like to discuss a potential project,
        please don't hesitate to reach out to me. I'm passionate about creating
        innovative mobile applications and would love to collaborate with you to
        bring your ideas to life.
      </Text>

      <Column style={{ paddingTop: 48 }}>
        <Text
          size="large"
          fontFamily="SemiBold"
          color="light"
          style={getInTouchSectionStyles.connectText}
        >
          Let's Connect
        </Text>

        <ConnectItem label="sample@gmail.com" type="email" />
        <ConnectItem label="/in/sampleurl" type="linkedin" paddingTop={8} />
        <ConnectItem label="@sampleurl" type="instagram" paddingTop={8} />
      </Column>
    </SectionContainer>
  );
};

export default GetInTouchSection;
