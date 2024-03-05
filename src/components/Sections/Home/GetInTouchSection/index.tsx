import { SectionContainer } from "@src/components/Containers";
import SectionTitle from "@src/components/SectionTitle";
import React from "react";

interface GetInTouchSectionProps {
  containerHeight: number;
}

const GetInTouchSection = ({ containerHeight }: GetInTouchSectionProps) => {
  return (
    <SectionContainer containerHeight={containerHeight}>
      <SectionTitle title="Get In Touch" />
    </SectionContainer>
  );
};

export default GetInTouchSection;
