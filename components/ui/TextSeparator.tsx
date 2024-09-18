import React from "react";
import { Text, View } from "react-native";

const TextSeparator = ({ label, space = "py-3" }: { label?: string, space? : string }) => {
  return (
    <View className={`flex-row w-[full] mx-1  items-center ${space}`}>
      <View className="flex-1 h-[1px]  bg-[#ccc] dark:bg-slate-700" />
      {label && <Text className="font-jet text-sm mx-2 dark:text-gray-300 text-gray-700 ">{label}</Text>}
      {label && <View className="flex-1 h-[1px]  bg-[#ccc] dark:bg-slate-700" />}
    </View> 
  );
};

export default TextSeparator;
