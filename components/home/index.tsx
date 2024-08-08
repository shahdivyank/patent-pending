import { Link } from "expo-router";
import { View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text>beatdrop</Text>
      <Text>hear the world from another perspective</Text>
      <Link href="/dashboard">Sign Up With Spotify</Link>
    </View>
  );
};

export default HomeScreen;
