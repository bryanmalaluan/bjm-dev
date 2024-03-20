import { observe } from "@legendapp/state";
import { observer } from "@legendapp/state/react";
import { Button } from "@src/components/Buttons";
import { Column, SectionContainer } from "@src/components/Containers";
import { ConnectItem } from "@src/components/Items";
import SectionTitle from "@src/components/SectionTitle";
import Text from "@src/components/Text";
import { loadingState$ } from "@src/legend-state/loading";
import { userState$ } from "@src/legend-state/user";
import fonts from "@src/theme/fonts";
import { formatSiteText } from "@src/utils/dataFormat";
import { downloadFile } from "@src/utils/files";
import React from "react";

import { getInTouchSectionStyles } from "./styles";

interface GetInTouchSectionProps {
  containerHeight: number;
}

const GetInTouchSection = observer(
  ({ containerHeight }: GetInTouchSectionProps) => {
    const user = userState$.user;
    const loading = loadingState$.loading;

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

        <Column style={{ paddingVertical: 48 }}>
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

        {/* show download button if user has uploaded a resume/cv */}
        {!!user.cv.get() && (
          <Button
            label="Download CV"
            alignSelf="center"
            loading={loading.get()}
            onPress={() => {
              downloadFile({ url: user.cv.peek() });
            }}
          />
        )}
      </SectionContainer>
    );
  },
);

export default GetInTouchSection;
