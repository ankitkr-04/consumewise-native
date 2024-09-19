import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Image, Text, View } from "react-native";

interface FormPickerProps {
  title: string;
  value: string;
  handleChange: (value: string) => void;
  options: { label: string; value: string }[];
  styles?: string;
  icon?: number;
  label?: string;
}

const FormPicker: React.FC<FormPickerProps> = ({
  title,
  value,
  handleChange,
  options,
  styles,
  icon,
  label,
}) => {
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

        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => handleChange(itemValue)}
          style={{ flex: 1, color: "#898989" }}
          
        >
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>

        {label && (
          <Text className="font-jetBold uppercase text-sm bg-gray-300 dark:bg-gray-600 px-2 py-1 rounded-lg dark:text-gray-200">
            {label}
          </Text>
        )}
      </View>
    </View>
  );
};

export default FormPicker;
