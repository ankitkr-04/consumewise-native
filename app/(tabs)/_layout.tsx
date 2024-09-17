import { icons } from "@/constants";
import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

interface TabItemProps {
  icon: number;
  label: string;
  color: string;
  focused: boolean;
}

const TabItem: React.FC<TabItemProps> = ({ icon, label, color, focused }) => {
  return (
    <View
      className={`items-center justify-center gap-2 ${focused && "bg-green-300 px-4 py-3 rounded-full"}`}
    >
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-7"
        tintColor={color}
      />
    </View>
  );
};

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#c1c1c1",

        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#f1f1f1",
          borderTopWidth: 1,

          elevation: 0,
          shadowOpacity: 0,
          height: 65,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabItem
              icon={icons.home}
              label="Home"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="recent"
        options={{
          headerShown: false,
          title: "Recent",
          tabBarIcon: ({ color, focused }) => (
            <TabItem
              icon={icons.recent}
              label="Recent"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          headerShown: false,
          title: "Scan",
          tabBarIcon: ({ color, focused }) => (
            <TabItem
              icon={icons.scan}
              label="Scan"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="health"
        options={{
          headerShown: false,
          title: "Health",
          tabBarIcon: ({ color, focused }) => (
            <TabItem
              icon={icons.health}
              label="Health"
              color={color}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabItem
              icon={icons.profile}
              label="Profile"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};
export default HomeLayout;
