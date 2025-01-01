import { View, Text } from "react-native";
import { Image } from "expo-image";
import { useUser } from "@/hooks/useUser";
import Icon from "../Icon";
import { router } from "expo-router";

const Header = () => {
  const { photo, beatdrops, followers, following, name, username, bio } =
    useUser(
      ({ photo, beatdrops, name, username, followers, following, bio }) => ({
        photo,
        beatdrops,
        name,
        username,
        followers,
        following,
        bio,
      }),
    );

  return (
    <View className="items-center p-4">
      <View className="flex w-full flex-row justify-between">
        <Icon size={28} name="Share_iOS_Export" />
        <View className="flex flex-row gap-4">
          <Icon
            size={28}
            name="Edit_Pencil_01"
            onPress={() => router.replace("/profile/edit")}
          />
          <Icon
            size={28}
            name="Settings"
            onPress={() => router.replace("/profile/settings")}
          />
        </View>
      </View>

      <View className="h-[up] w-[80] overflow-hidden rounded-full">
        <Image
          source={photo}
          style={{ height: 80, width: 80 }}
          className="rounded-full"
        />
      </View>
      <View className="my-2 items-center">
        <Text className="text-3xl font-bold">{name}</Text>
        <Text className="text-xl text-beatdrop-placeholder">@{username}</Text>
      </View>

      <View className="flex flex-row gap-6">
        <View className="items-center gap-1">
          <Text className="text-xl">{beatdrops} </Text>
          <Text>Beatdrops</Text>
        </View>

        <View className="items-center gap-1">
          <Text className="text-xl">{followers}</Text>
          <Text>Followers</Text>
        </View>

        <View className="items-center gap-1">
          <Text className="text-xl">{following}</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text className="mt-3 text-xl">{bio}</Text>
    </View>
  );
};

export default Header;
