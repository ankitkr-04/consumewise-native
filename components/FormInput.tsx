import { icons } from "@/constants";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

interface FormInputProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChange: (e: string) => void;
  keyBoardType?: string;
  styles?: string;
  icon?: number;
  label?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  title,
  value,
  placeholder,
  handleChange,
  keyBoardType,
  styles,
  icon,
  label,
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <View className={` ${styles}`}>
      <Text className="text-black-200 dark:text-gray-400 mx-2 my-2 font-sansSemibold text-md">
        {title}
      </Text>

      <View
        className="border-2 border-black-200 dark:border-gray-700 w-full h-16 px-4 bg-black-100 
                        rounded-2xl focus:border-secondary items-center flex-row"
      >
        {icon && (
          <Image
            source={icon}
            className="w-6 h-6"
            resizeMode="contain"
            tintColor={"#898989"}
          />
        )}
        <TextInput
          className="flex-1 text-black/90 dark:text-gray-200 font-sansSemibold text-lg ml-2"
          value={value}
          placeholder={value ? "" : placeholder}
          onChangeText={handleChange}
          secureTextEntry={title === "Password" && !showPass}
          placeholderTextColor="#8D8D8D"
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Image
              source={!showPass ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
              tintColor={"#898989"}
            />
          </TouchableOpacity>
        )}
        {label && (
          <Text className="font-jetBold uppercase text-sm bg-gray-300 dark:bg-gray-600 px-2 py-1 rounded-lg dark:text-gray-200">
            {label}
          </Text>
        )}
      </View>
    </View>
  );
};

export default FormInput;
