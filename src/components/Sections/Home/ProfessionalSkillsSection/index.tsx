import { ProfessionalSkill } from "@src/api/types";
import { SectionPageButton } from "@src/components/Buttons";
import { ProfessionalSkillCard } from "@src/components/Cards";
import { Column, Row, SectionContainer } from "@src/components/Containers";
import SectionTitle from "@src/components/SectionTitle";
import { userState$ } from "@src/legend-state/user";
import colors from "@src/theme/colors";
import React from "react";
import { FlatList, useWindowDimensions } from "react-native";
import { SharedValue } from "react-native-reanimated";

import { professionalSkillsSectionStyles } from "./styles";

interface ProfessionalSkillsSectionProps {
  containerHeight: number;
  startAnimation: SharedValue<boolean>;
  onPressNextPage?: () => void;
}

const ProfessionalSkillsSection = ({
  containerHeight,
  startAnimation,
  onPressNextPage,
}: ProfessionalSkillsSectionProps) => {
  const professionalSkills = userState$.user.professionalSkills;

  const { width } = useWindowDimensions();

  const numColumns = width >= 800 ? 3 : 2;

  const renderItem = React.useCallback(
    ({ item, index }: { item: ProfessionalSkill; index: number }) => {
      return (
        <ProfessionalSkillCard
          label={item.title}
          rating={item.rating}
          startAnimation={startAnimation}
        />
      );
    },
    [],
  );

  const keyExtractor = React.useCallback(
    (item: ProfessionalSkill) => `key-${item.id}`,
    [],
  );

  const itemSeparatorComponent = React.useCallback(() => {
    return <Row style={professionalSkillsSectionStyles.itemSeparator} />;
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
          data={professionalSkills.get()}
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
