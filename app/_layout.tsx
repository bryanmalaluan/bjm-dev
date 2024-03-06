import * as Font from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { Platform } from "react-native";

import WebSplashPage from "./websplash";

// keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
  // pre-load custom fonts
  const [fontsLoaded] = Font.useFonts({
    Black: require("../assets/fonts/LeagueSpartan-Black.ttf"),
    Bold: require("../assets/fonts/LeagueSpartan-Bold.ttf"),
    ExtraBold: require("../assets/fonts/LeagueSpartan-ExtraBold.ttf"),
    ExtraLight: require("../assets/fonts/LeagueSpartan-ExtraLight.ttf"),
    Light: require("../assets/fonts/LeagueSpartan-Light.ttf"),
    Medium: require("../assets/fonts/LeagueSpartan-Medium.ttf"),
    Regular: require("../assets/fonts/LeagueSpartan-Regular.ttf"),
    SemiBold: require("../assets/fonts/LeagueSpartan-SemiBold.ttf"),
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      const hideSplashScreen = async () => {
        await SplashScreen.hideAsync();
      };

      setTimeout(() => hideSplashScreen(), 1000);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    if (Platform.OS === "web") {
      return <WebSplashPage />;
    }
    return null;
  }

  return (
    <Stack screenOptions={{ header: () => null }}>
      <Stack.Screen name="(root)" />
    </Stack>
  );
};

export default AppLayout;
