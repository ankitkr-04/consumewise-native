import Logo from "@/components/Logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

const index = () => {
  useEffect(() => {
    const Open = async () => {
      const isOpened = await AsyncStorage.getItem("isOpened");
      if(isOpened){
        router.replace("/home")
      }
      else{
        router.replace("/welcome")
      }
    }
    Open();
  });

  return (
    <View className="flex h-screen items-center justify-center app-background">
      <Logo />
    </View>
  );
};
export default index;
