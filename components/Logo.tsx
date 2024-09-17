import React from "react";
import { Image, Text, View } from "react-native";
import { icons } from "../constants";

const Logo = () => {
  return (
    <View className="flex-center flex-row gap-2 ">
      <Image
        source={icons.logo}
        className="w-10 h-10"
        accessibilityLabel="NutriWise Logo"
      />
      <Text className="text-24 font-montserrat">NutriWise</Text>
    </View>
  );
};

export default Logo;
