import { Stack } from "expo-router";

const AppLayout = () => {
  return (
    <Stack screenOptions={{ header: () => null }}>
      <Stack.Screen name="(root)" />
      {/* <Stack.Screen name="users/[id]" /> */}
    </Stack>
  );
};

export default AppLayout;
