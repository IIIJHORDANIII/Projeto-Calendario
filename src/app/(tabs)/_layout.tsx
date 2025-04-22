import { Tabs } from "expo-router";
import { Foundation } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",

        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#373737",
          borderColor: "#373737",
          position: "absolute",
          bottom: -35,
          height: 80,
          gap: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Foundation name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="loading"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Foundation name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
