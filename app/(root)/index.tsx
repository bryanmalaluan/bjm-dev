import {
  AboutSection,
  ExperienceSection,
  GetInTouchSection,
  MainSection,
  ProfessionalSkillsSection,
} from "@src/components/Sections";
import colors from "@src/theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { LayoutChangeEvent } from "react-native";
import Animated from "react-native-reanimated";

const RootPage = () => {
  const scrollViewRef = React.useRef<Animated.ScrollView>(null);
  const [containerHeight, setContainerHeight] = React.useState(0);

  const scrollToNextSection = (index: number) => {
    if (scrollViewRef?.current) {
      scrollViewRef.current.scrollTo({
        y: containerHeight * index,
        x: 0,
        animated: true,
      });
    }
  };

  const onLayout = React.useCallback((event: LayoutChangeEvent) => {
    setContainerHeight(event.nativeEvent.layout.height);
  }, []);

  return (
    <LinearGradient
      colors={[colors.dark, colors.dark, colors.dark, colors.brand.dark]}
      style={{ flex: 1, width: "100%" }}
    >
      <Animated.ScrollView
        ref={scrollViewRef}
        pagingEnabled
        scrollEventThrottle={32}
        style={{ width: "100%" }}
        onLayout={onLayout}
      >
        <MainSection
          containerHeight={containerHeight}
          onPressNextPage={() => scrollToNextSection(1)}
        />
        <AboutSection
          containerHeight={containerHeight}
          onPressNextPage={() => scrollToNextSection(2)}
        />
        <ExperienceSection
          containerHeight={containerHeight}
          onPressNextPage={() => scrollToNextSection(3)}
        />
        <ProfessionalSkillsSection
          containerHeight={containerHeight}
          onPressNextPage={() => scrollToNextSection(4)}
        />
        <GetInTouchSection containerHeight={containerHeight} />
      </Animated.ScrollView>
    </LinearGradient>
  );
};

export default RootPage;
