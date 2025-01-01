import { View, SafeAreaView } from "react-native";
import React from "react";
import Header from "./header";

interface props {
  title: string;
  children: React.ReactNode;
  callback: () => void;
}

const Layout = ({ title, children, callback }: props) => {
  return (
    <SafeAreaView className="flex items-center justify-center">
      <View className="w-11/12 p-4">
        <Header title={title} callback={callback} />
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Layout;
