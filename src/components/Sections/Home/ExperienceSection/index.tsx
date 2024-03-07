import { SectionPageButton } from "@src/components/Buttons";
import { ExperienceCard } from "@src/components/Cards";
import { Column, Row, SectionContainer } from "@src/components/Containers";
import SectionTitle from "@src/components/SectionTitle";
import React from "react";
import { FlatList } from "react-native";

interface ExperienceSectionProps {
  containerHeight: number;
  onPressNextPage?: () => void;
}

const ExperienceSection = ({
  containerHeight,
  onPressNextPage,
}: ExperienceSectionProps) => {
  const renderItem = React.useCallback(() => {
    return <ExperienceCard />;
  }, []);

  const keyExtractor = React.useCallback(
    (item, index) => `key-${item}${index}`,
    [],
  );

  const itemSeparatorComponent = React.useCallback(() => {
    return <Row style={{ width: "100%", height: 16 }} />;
  }, []);

  return (
    <SectionContainer containerHeight={containerHeight}>
      <Column style={{ flex: 1, width: "100%" }}>
        <SectionTitle title="Experience" />

        <FlatList
          data={[1, 2, 3]}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          scrollEnabled={false}
          style={{ width: "100%", pointerEvents: "none" }}
          contentContainerStyle={{ paddingBottom: 20 }}
          ItemSeparatorComponent={itemSeparatorComponent}
        />
      </Column>

      <SectionPageButton onPress={onPressNextPage} />
    </SectionContainer>
  );
};

export default ExperienceSection;
