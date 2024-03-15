import { Experience } from "@src/api/types";
import { SectionPageButton } from "@src/components/Buttons";
import { ExperienceCard } from "@src/components/Cards";
import { Column, Row, SectionContainer } from "@src/components/Containers";
import SectionTitle from "@src/components/SectionTitle";
import { userState$ } from "@src/legend-state/user";
import React from "react";
import { FlatList } from "react-native";
import { SharedValue } from "react-native-reanimated";

interface ExperienceSectionProps {
  containerHeight: number;
  startAnimation: SharedValue<boolean>;
  onPressNextPage?: () => void;
}

const ExperienceSection = ({
  containerHeight,
  startAnimation,
  onPressNextPage,
}: ExperienceSectionProps) => {
  const experiences = userState$.user.experiences;

  const renderItem = React.useCallback(
    ({ item, index }: { item: Experience; index: number }) => {
      const duration = index * 200;

      return (
        <ExperienceCard
          experience={item}
          duration={duration}
          startAnimation={startAnimation}
        />
      );
    },
    [],
  );

  const keyExtractor = React.useCallback(
    (item: Experience) => `key-${item.id}`,
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
          data={experiences.get()}
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
