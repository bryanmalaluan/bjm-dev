import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const UserPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Users page - {id}</Text>
    </View>
  );
};

export default UserPage;
