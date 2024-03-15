import * as Images from "@src/assets/images";
import { Container } from "@src/components/Containers";
import Image from "@src/components/Image";
import useResponsiveLayout from "@src/hooks/useResponsiveLayout";
import colors from "@src/theme/colors";
import React from "react";

const WebSplashPage = () => {
  const { scaleSize } = useResponsiveLayout();

  return (
    <Container
      alignItems="center"
      justifyContent="center"
      backgroundColor={colors.dark}
    >
      <Image
        source={Images.Icon}
        style={{
          height: scaleSize(200),
          width: scaleSize(200),
        }}
      />
    </Container>
  );
};

export default WebSplashPage;
