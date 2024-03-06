import colors from "@src/theme/colors";
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
      size="subHeading"
      fontFamily="SemiBold"
      style={sectionTitleStyles.text}
    >
      {title}
    </Text>
  );
};

export default SectionTitle;
