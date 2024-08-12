import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Map from '../../assets/Map.svg';
import Create from '../../assets/Create.svg';
import Profile from '../../assets/Profile.svg';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#E12A62" }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <Map style={{color: focused ? color : '#161616'}} ></Map>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <Create style={{color: focused ? color : '#161616'}} ></Create>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <Profile style={{color: focused ? color : '#161616'}} ></Profile>
          ),
        }}
      />
    </Tabs>
  );
}
