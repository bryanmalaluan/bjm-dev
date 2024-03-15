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
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const RootPage = () => {
  const scrollViewRef = React.useRef<Animated.ScrollView>(null);

  const [containerHeight, setContainerHeight] = React.useState(0);

  const sharedHeight = useSharedValue(0);
  const animateExperiences = useSharedValue(false);
  const animateProfessionalSkills = useSharedValue(false);

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
    const { height } = event.nativeEvent.layout;
    sharedHeight.value = height; // store in shared value to work with scroll animation
    setContainerHeight(height);
  }, []);

  const animatedScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const { y } = event.contentOffset;

      // add by 1 to correctly get section index
      const sectionIndex = Math.round(y / sharedHeight.value + 1);

      // animate only once
      // animate experiences initially if scrolled to section
      if (!animateExperiences.value && sectionIndex === 3) {
        animateExperiences.value = true;
      }

      // animate professional skills initially if scrolled to section
      if (!animateProfessionalSkills.value && sectionIndex === 4) {
        animateProfessionalSkills.value = true;
      }
    },
  });

  return (
    <LinearGradient
      colors={[colors.dark, colors.dark, colors.dark, colors["brand-dark"]]}
      style={{ flex: 1, width: "100%" }}
    >
      <Animated.ScrollView
        ref={scrollViewRef}
        pagingEnabled
        scrollEventThrottle={16}
        style={{ width: "100%" }}
        onLayout={onLayout}
        onScroll={animatedScrollHandler}
      >
        <MainSection
          containerHeight={containerHeight}
          onPressNextPage={() => scrollToNextSection(1)}
        />

        {/*
        need to set conditionally on other components
        there's an issue in web where it lands to random a section after page loads
        */}
        {containerHeight !== 0 && (
          <AboutSection
            containerHeight={containerHeight}
            onPressNextPage={() => scrollToNextSection(2)}
          />
        )}

        {containerHeight !== 0 && (
          <ExperienceSection
            containerHeight={containerHeight}
            startAnimation={animateExperiences}
            onPressNextPage={() => scrollToNextSection(3)}
          />
        )}

        {containerHeight !== 0 && (
          <ProfessionalSkillsSection
            containerHeight={containerHeight}
            startAnimation={animateProfessionalSkills}
            onPressNextPage={() => scrollToNextSection(4)}
          />
        )}

        {containerHeight !== 0 && (
          <GetInTouchSection containerHeight={containerHeight} />
        )}
      </Animated.ScrollView>
    </LinearGradient>
  );
};

export default RootPage;
