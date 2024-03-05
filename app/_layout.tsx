import Entypo from "@expo/vector-icons/Entypo";
import * as Font from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { Platform } from "react-native";

import WebSplashPage from "./websplash";

// keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
  const [isAppReady, setIsAppReady] = React.useState(false);

  React.useEffect(() => {
    const prepare = async () => {
      try {
        // pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
      } catch (e) {
        console.warn(e);
      } finally {
        // tell the application to render
        setIsAppReady(true);
      }
    };

    prepare();
  }, []);

  React.useEffect(() => {
    if (isAppReady) {
      const hideSplashScreen = async () => {
        await SplashScreen.hideAsync();
      };

      setTimeout(() => hideSplashScreen(), 1000);
    }
  }, [isAppReady]);

  if (!isAppReady) {
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
