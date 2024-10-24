import Icon from "@/components/Icon";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useUser } from "@/hooks/useUser";
import Field from "@/components/profile/settings/field";
import { Link } from "expo-router";
import { useState } from "react";
import { Switch } from "react-native-gesture-handler";
import { router } from "expo-router";

const Settings = () => {
  const {
    email,
    postActivity,
    friendPosts,
    taggedPosts,
    setAttribute,
    setAllUndefined,
  } = useUser();

  const onSignOut = () => {
    setAllUndefined();
    router.replace("/"); // FIXME: update to send to sign in instead
  };

  return (
    <SafeAreaView className="flex items-center justify-center">
      <View className="w-11/12 p-4">
        <View className="flex flex-row items-center">
          <View className="w-1/3">
            <Link href="/profile">
              <Icon name="Chevron_Left" size={24} />
            </Link>
          </View>
          <Text className="w-1/3 text-center text-2xl font-semibold">
            Settings
          </Text>
        </View>

        <Text className="text-beatdrop-gray mb-2 mt-10 text-xl">
          {" "}
          ACCOUNT INFORMATION
        </Text>

        <View className="my-4 flex flex-row justify-between">
          <Text className="text-lg">Email</Text>
          <Text className="text-lg text-beatdrop-placeholder">{email}</Text>
        </View>
        <View className="border-[0.5px] border-beatdrop-border" />
        <Field
          field="Change Password"
          icon="Chevron_Right"
          link="/profile/password"
        />
        <View className="border-[0.5px] border-beatdrop-border" />

        <Text className="text-beatdrop-gray mb-2 mt-12 text-xl">
          {" "}
          NOTIFICATIONS
        </Text>

        <View className="my-4 flex flex-row items-center justify-between">
          <Text className="text-lg"> Post Activity</Text>
          <Switch
            value={postActivity}
            onValueChange={(value) => setAttribute("postActivity", value)}
          />
        </View>
        <View className="border-[0.5px] border-beatdrop-border" />

        <View className="my-4 flex flex-row items-center justify-between">
          <Text className="text-lg"> Friend Posts</Text>
          <Switch
            value={friendPosts}
            onValueChange={(value) => setAttribute("friendPosts", value)}
          />
        </View>
        <View className="border-[0.5px] border-beatdrop-border" />

        <View className="my-4 flex flex-row items-center justify-between">
          <Text className="text-lg"> Tagged Posts</Text>
          <Switch
            value={taggedPosts}
            onValueChange={(value) => setAttribute("taggedPosts", value)}
          />
        </View>
        <View className="border-[0.5px] border-beatdrop-border" />

        <TouchableOpacity
          onPress={onSignOut}
          className="mt-44 h-14 w-full justify-center rounded-full bg-beatdrop-primary"
        >
          <Text className="text-center text-xl font-semibold text-white">
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
