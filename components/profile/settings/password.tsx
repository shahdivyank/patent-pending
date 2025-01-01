import { View, Text, TextInput } from "react-native";
import { useUser } from "@/hooks/useUser";
import Layout from "./layout";
import { useState } from "react";
import { schema } from "@/schemas/users";
import { submit } from "@/utils/profile";
import Icon from "@/components/Icon";

const MAX_LENGTH = 30;

const Password = () => {
  const { dummyPassword, setAttribute } = useUser();
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [hasEnteredCorrectPassword, setHasEnteredCorrectPassword] =
    useState(false);
  const [error, setError] = useState("");

  const onSubmit = () => {};

  const onCurrentPasswordChange = (text: string) => {
    if (text === dummyPassword) {
      setHasEnteredCorrectPassword(true);
    } else {
      setHasEnteredCorrectPassword(false);
    }
  };

  return (
    <Layout title="Change Password" callback={onSubmit}>
      <View className="mt-12">
        <TextInput
          placeholder="Current Password"
          placeholderTextColor={"#828282"}
          onChangeText={onCurrentPasswordChange}
          className="my-4 w-full rounded border-[1px] border-beatdrop-border p-4"
        />

        <TextInput
          placeholder="New Password"
          placeholderTextColor={"#828282"}
          value={newPassword}
          editable={hasEnteredCorrectPassword}
          onChangeText={setNewPassword}
          className="my-4 w-full rounded border-[1px] border-beatdrop-border p-4"
        />

        <TextInput
          placeholder="Re-Type New Password"
          placeholderTextColor={"#828282"}
          value={confirmNewPassword}
          editable={hasEnteredCorrectPassword}
          onChangeText={setConfirmNewPassword}
          className="my-4 w-full rounded border-[1px] border-beatdrop-border p-4"
        />
      </View>
    </Layout>
  );
};

export default Password;
