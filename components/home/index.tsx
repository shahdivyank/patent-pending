import { Link } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";
import homebg from "@/assets/images/homeBG.png";
import { ImageBackground } from "expo-image";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { useUser } from "@/hooks/useUser";

const HomeScreen = () => {
  const { resetAttributes } = useUser();
  return (
    <ImageBackground source={homebg}>
      <SafeAreaView className="flex h-screen items-center">
        <View className="flex h-1/2 w-9/12 justify-end">
          <Text className="text-5xl font-semibold text-white">beatdrop</Text>
          <Text className="mt-2 text-white">
            hear the world from another perspective
          </Text>
          <View className="mt-12 flex flex-row items-center justify-center rounded-full border-[1px] border-white p-3">
            <FontAwesome
              className="mr-4"
              name="spotify"
              size={28}
              color="green"
            />
            <Link
              onPress={() => {
                resetAttributes();
              }}
              className="text-xl text-white"
              href="/onboarding/0"
            >
              Sign Up With Spotify
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;
