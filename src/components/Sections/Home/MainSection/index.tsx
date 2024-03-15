import * as Images from "@src/assets/images";
import { SectionPageButton } from "@src/components/Buttons";
import { Row, SectionContainer } from "@src/components/Containers";
import Image from "@src/components/Image";
import Text from "@src/components/Text";
import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import { userState$ } from "@src/legend-state/user";
import React from "react";
import Animated from "react-native-reanimated";

import { useMainSectionAnimation } from "./hooks/useMainSectionAnimation";
import { mainSectionStyles } from "./styles";

interface MainSectionProps {
  containerHeight: number;
  onPressNextPage?: () => void;
}

const MainSection = ({
  containerHeight,
  onPressNextPage,
}: MainSectionProps) => {
  const user = userState$.user;
  const { scaleSize } = useResponsiveLayout();

  const { animatedImageStyle, animatedDetailsStyle, animatedBottomStyle } =
    useMainSectionAnimation({ disabled: containerHeight === 0 });

  return (
    <SectionContainer containerHeight={containerHeight}>
      <Animated.Image
        source={Images.Phone}
        style={[
          mainSectionStyles.phoneImage,
          {
            height: scaleSize(500),
            width: scaleSize(500),
            top: scaleSize(50),
            right: -scaleSize(200),
          },
          animatedImageStyle,
        ]}
      />

      <Row
        style={[mainSectionStyles.infoContainer, { height: scaleSize(500) }]}
      >
        <Animated.View style={[animatedDetailsStyle, { flex: 0.7 }]}>
          <Image
            source={{ uri: user.avatar.get() }}
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
            color="light"
            size="heading"
            fontFamily="Bold"
            style={{
              letterSpacing: 1.5,
              marginTop: 16,
            }}
          >
            {`${user.firstName.get()} ${user.lastName.get()}`}
          </Text>

          <Text
            color="brand-light"
            size="subHeading"
            fontFamily="SemiBold"
            style={{
              textTransform: "lowercase",
              letterSpacing: 1.25,
              marginTop: 8,
            }}
          >
            {user.headline.get()}
          </Text>
        </Animated.View>
      </Row>

      <Animated.View
        style={[mainSectionStyles.bottomContainer, animatedBottomStyle]}
      >
        <Text
          color="light"
          size="subHeading"
          fontFamily="Medium"
          style={mainSectionStyles.bottomText}
        >
          {user.introText.get()}
        </Text>

        <SectionPageButton onPress={onPressNextPage} />
      </Animated.View>
    </SectionContainer>
  );
};

export default MainSection;
