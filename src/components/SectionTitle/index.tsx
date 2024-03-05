import colors from "@src/theme/colors";
import fonts from "@src/theme/fonts";
import React from "react";

import { sectionTitleStyles } from "./styles";
import Text from "../Text";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Text
      color={colors.light}
      fontSize={fonts.size.subHeading}
      fontWeight="bold"
      style={sectionTitleStyles.text}
    >
      {title}
    </Text>
  );
};

export default SectionTitle;
