import CustomButton from "@/components/CustomButton";
import Logo from "@/components/Logo";
import { images } from "@/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const welcome = () => {
  const [loading, setLoading] = useState(false);
  const handlePress = async () => {
    setLoading(true);
    await AsyncStorage.setItem("isOpened", "true");
    setLoading(false);
    router.replace("/(tabs)");

  };
  return (
    <SafeAreaView className="flex-1 h-full ">
      <ScrollView
        className=" app-background"
        contentContainerStyle={{ height: "100%" }}
      >
        <View className="flex-center w-full min-h-[80vh] px-4">
          <Logo />
          <Image
            source={images.onboarding}
            accessibilityLabel="Welcome Image"
            className="w-[80%] object-contain rounded-xl shadow-sm h-96 mt-8"
          />
          <Text className="text-18 w-[75%] font-jetSemibold text-center mt-4">Transform Your Health with Every Step</Text>
        </View>

        <CustomButton
          title="Get Started"
          containerStyles="mx-4"
          handlePress={handlePress}
          isLoading={loading}
          textStyles="font-sansBold"
        />
      </ScrollView>

      <StatusBar className="app-background" />
    </SafeAreaView>
  );
};

export default welcome;
