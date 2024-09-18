// components/OAuthButton.tsx
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

interface OAuthButtonProps {
  icon?: any;
  label: string;
  otherStyles?: string;
  textStyles?: string;
}

const OAuthButton = ({
  icon,
  label,
  otherStyles,
  textStyles,
}: OAuthButtonProps) => {
  return (
    <TouchableOpacity
      className={`flex-1 border dark:border-lime-700 border-lime-400 flex-row justify-center items-center py-4 rounded-lg ${otherStyles}`}
    >
      {icon && (
        <Image source={icon} className="h-6 w-6 mr-2" resizeMode="contain" />
      )}
      <Text className={`dark:text-white/80 font-sansSemibold ${textStyles}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default OAuthButton;
