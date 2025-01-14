import { View, Pressable, TextInput, InputAccessoryView } from "react-native";
import { Image } from "expo-image";
import { comment, beatdrop } from "@/types";
import { useState } from "react";
import Icon from "../Icon";
import { useUser } from "@/hooks/useUser";
import { useDrops } from "@/hooks/useDrops";
interface props {
  beat: Record<string, never> | beatdrop;
  setBeat: any;
}

const Comment = ({ beat, setBeat }: props) => {
  const [message, setMessage] = useState("");

  const { username, photo } = useUser(({ username, photo }) => ({
    username,
    photo,
  }));

  const { addComment } = useDrops(({ addComment }) => ({ addComment }));

  const handlePress = () => {
    if (message.length === 0) return;

    const { did } = beat;

    const comment: comment = {
      timestamp: new Date(),
      username,
      photo,
      likes: 0,
      comment: message,
    };

    setBeat({
      ...beat,
      comments: [...(beat.comments ?? []), comment],
    });

    addComment(did, comment);
    setMessage("");
  };
  return (
    <InputAccessoryView backgroundColor="white">
      <View className="flex-row items-center justify-between border-t border-beatdrop-border/50 bg-white p-2">
        <View className="flex w-full flex-row items-center justify-between">
          <Image
            source={photo}
            style={{ height: 35, width: 35, borderRadius: 999, marginLeft: 4 }}
          />
          <TextInput
            className="w-9/12 pl-2 placeholder:text-beatdrop-placeholder"
            placeholder="Write a comment"
            onChangeText={setMessage}
            value={message}
          />
          <Pressable
            className="flex flex-col items-center justify-center rounded-full bg-beatdrop-primary p-2"
            onPress={handlePress}
          >
            <Icon name="Paper_Plane" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </InputAccessoryView>
  );
};

export default Comment;
