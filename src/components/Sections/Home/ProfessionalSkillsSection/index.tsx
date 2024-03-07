import { SectionPageButton } from "@src/components/Buttons";
import { ProfessionalSkillCard } from "@src/components/Cards";
import { Column, Row, SectionContainer } from "@src/components/Containers";
import SectionTitle from "@src/components/SectionTitle";
import colors from "@src/theme/colors";
import React from "react";
import { FlatList, useWindowDimensions } from "react-native";

import { professionalSkillsSectionStyles } from "./styles";

interface ProfessionalSkillsSectionProps {
  containerHeight: number;
  onPressNextPage?: () => void;
}

const ProfessionalSkillsSection = ({
  containerHeight,
  onPressNextPage,
}: ProfessionalSkillsSectionProps) => {
  const { width } = useWindowDimensions();

  const numColumns = width >= 800 ? 3 : 2;

  const renderItem = React.useCallback(({ item }) => {
    return <ProfessionalSkillCard label={`Skill - ${item}`} rating={4} />;
  }, []);

  const keyExtractor = React.useCallback(
    (item, index) => `key-${item}${index}`,
    [],
  );

  const itemSeparatorComponent = React.useCallback(() => {
    return <Row style={{ height: 24, width: 24 }} />;
  }, []);

  return (
    <SectionContainer
      containerHeight={containerHeight}
      backgroundColor={colors.dark}
    >
      <Column style={professionalSkillsSectionStyles.subContainer}>
        <SectionTitle title="Professional Skills" />

        <FlatList
          key={numColumns}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          scrollEnabled={false}
          horizontal={false}
          numColumns={numColumns}
          style={{ width: "100%", pointerEvents: "none" }}
          columnWrapperStyle={{
            gap: 8,
          }}
          ItemSeparatorComponent={itemSeparatorComponent}
        />
      </Column>

      <SectionPageButton onPress={onPressNextPage} />
    </SectionContainer>
  );
};

export default ProfessionalSkillsSection;
