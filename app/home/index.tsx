import { ScrollView } from "@src/components/Containers";
import {
  AboutSection,
  ExperienceSection,
  GetInTouchSection,
  MainSection,
  ProfessionalSkillsSection,
} from "@src/components/Sections";
import colors from "@src/theme/colors";
import { LinearGradient } from "expo-linear-gradient";
// import { router } from "expo-router";
import React from "react";
import { LayoutChangeEvent } from "react-native";

const HomePage = () => {
  const [containerHeight, setContainerHeight] = React.useState(0);

  const onLayout = React.useCallback((event: LayoutChangeEvent) => {
    setContainerHeight(event.nativeEvent.layout.height);
  }, []);

  return (
    <LinearGradient
      colors={[colors.dark, colors.dark, colors.dark, colors.brand.dark]}
      style={{ flex: 1, width: "100%" }}
    >
      <ScrollView pagingEnabled onLayout={onLayout}>
        <MainSection containerHeight={containerHeight} />
        <AboutSection containerHeight={containerHeight} />
        <ExperienceSection containerHeight={containerHeight} />
        <ProfessionalSkillsSection containerHeight={containerHeight} />
        <GetInTouchSection containerHeight={containerHeight} />
      </ScrollView>
    </LinearGradient>
  );

  // return (
  //   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //     <Text fontSize={24} style={{ marginBottom: 24 }}>
  //       This is the home page!
  //     </Text>

  //     <Pressable
  //       onPress={() =>
  //         router.push({ pathname: "users/[id]", params: { id: 2 } })
  //       }
  //     >
  //       <Text fontSize={20}>Go to user</Text>
  //     </Pressable>
  //   </View>
  // );
};

export default HomePage;
