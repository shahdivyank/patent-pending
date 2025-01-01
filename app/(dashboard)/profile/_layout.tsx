import React from "react";
import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="edit"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="password"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="name"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="username"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="bio"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
