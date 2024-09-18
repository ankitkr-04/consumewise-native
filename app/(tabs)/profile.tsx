import Loading from "@/components/Loading";
import { useGlobalContext } from "@/context/GlobalProvider";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const { isLogged, loading } = useGlobalContext();

  const handlePress = () => {
    router.push("/sign-in");
  };

  if (loading)
    return (
      <SafeAreaView className="h-[100vh] ">
        <View className="flex items-center h-full justify-center">
          <Loading />
        </View>
      </SafeAreaView>
    );
  return (
    <SafeAreaView className="h-full">
      {isLogged ? (
        <ScrollView className="app-background"></ScrollView>
      ) : (
        <View className="flex items-center h-full app-background justify-center">
          <Text className="text-18">Please sign in to view your profile</Text>
          <TouchableOpacity
            className="px-8 py-3 mt-4 rounded-xl bg-purple-700"
            onPress={handlePress}
          >
            <Text className="text-14">Sign In</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;
