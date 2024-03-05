import { Stack } from "expo-router";

const AppLayout = () => {
  return (
    <Stack initialRouteName="index" screenOptions={{ header: () => null }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="users/[id]" />
    </Stack>
  );
};

export default AppLayout;
