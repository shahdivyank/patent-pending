import { Href, Link } from "expo-router";
import { View, Text } from "react-native";
import Icon from "@/components/Icon";

interface props {
  field: string;
  icon: string;
  link: Href<string>;
}

const Field = ({ field, icon, link }: props) => {
  return (
    <Link href={link} className="flex flex-row items-center justify-center">
      <View className="flex w-full flex-row justify-between py-4">
        <Text className="text-lg">{field}</Text>
        <Icon name={icon} size={24} />
      </View>
    </Link>
  );
};

export default Field;
