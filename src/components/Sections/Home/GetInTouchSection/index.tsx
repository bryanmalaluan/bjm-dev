import { Column, SectionContainer } from "@src/components/Containers";
import { ConnectItem } from "@src/components/Items";
import SectionTitle from "@src/components/SectionTitle";
import Text from "@src/components/Text";
import { userState$ } from "@src/legend-state/user";
import fonts from "@src/theme/fonts";
import { formatSiteText } from "@src/utils/dataFormat";
import React from "react";

import { getInTouchSectionStyles } from "./styles";

interface GetInTouchSectionProps {
  containerHeight: number;
}

const GetInTouchSection = ({ containerHeight }: GetInTouchSectionProps) => {
  const user = userState$.user;

  return (
    <SectionContainer containerHeight={containerHeight}>
      <SectionTitle title="Get In Touch" />

      <Text
        color="light"
        lineHeight={fonts.size.regular + 4}
        style={getInTouchSectionStyles.summaryText}
      >
        {user.getInTouchText.get()}
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

        <ConnectItem label={user.email.get()} type="email" />
        <ConnectItem
          label={formatSiteText(user.linkedIn.get(), "linkedin")}
          type="linkedin"
          paddingTop={8}
        />
        <ConnectItem
          label={formatSiteText(user.github.get(), "github")}
          type="github"
          paddingTop={8}
        />
        <ConnectItem
          label={formatSiteText(user.instagram.get(), "instagram")}
          type="instagram"
          paddingTop={8}
        />
      </Column>
    </SectionContainer>
  );
};

export default GetInTouchSection;
