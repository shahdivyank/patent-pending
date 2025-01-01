import Icon from "@/components/Icon";
import { Link, router } from "expo-router";
import { View, Text, Pressable } from "react-native";

interface props {
  title: string;
  callback: () => void;
}

const Header = ({ title, callback }: props) => {
  const onSubmit = () => {
    callback();
    router.replace("/profile/settings");
  };

  return (
    <View className="flex flex-row items-center justify-between">
      <Link href="/profile/settings">
        <Icon name="Chevron_Left" size={24} />
      </Link>
      <Text className="text-center text-2xl font-semibold">{title}</Text>
      <Pressable onPress={onSubmit}>
        <Text className="text-2xl text-beatdrop-primary">Save</Text>
      </Pressable>
    </View>
  );
};

export default Header;
