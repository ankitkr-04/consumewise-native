import React from "react";
import { Image, Text, View } from "react-native";
import { icons } from "../constants";
interface LogoProps {
  showText?: boolean;
  logoBackground? : string
}
const Logo = ({ showText = true, logoBackground }: LogoProps) => {
  return (
    <View className="flex-center flex-row gap-2 ">
      <View className={`${logoBackground}`}>
      <Image
        source={icons.logo}
        className={`w-10 h-10`}
        accessibilityLabel="NutriWise Logo"

      />
      </View>
      {showText && <Text className="text-24 font-montserrat">NutriWise</Text>}
    </View>
  );
};

export default Logo;
