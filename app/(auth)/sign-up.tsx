import FormPicker from "@/components/FormPicker";
import FormInput from "@/components/FormInput";
import Logo from "@/components/Logo";
import { icons } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import useForm, { FormState } from "@/hooks/useForm";
import { getCurrentUser, signUp } from "@/lib/appwrite";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SignUpFormState extends FormState {
  email: string;
  name: string;
  password: string;
  age: string;
  weight: string;
  gender: string;
  height: string;
  activityLevel: string;
}

const SignUp = () => {
  const { setIsLogged, setUser } = useGlobalContext();
  const [step, setStep] = useState(1); // Step state

  const { form, isSubmitting, handleChange, handleSubmit } =
    useForm<SignUpFormState>({
      initialValues: {
        email: "",
        name: "",
        password: "",
        age: "",
        weight: "",
        gender: "",
        height: "",
        activityLevel: "",
        
      },
      onSubmit: async (values) => {
        const currUser = await signUp({avatar : "", ...values });
        
        setUser(currUser);
        setIsLogged(true);
        router.replace("/home");
      },
    });

  
  const handleNext = () => {
    if (step === 1) setStep(2); 
  };

  const handleBack = () => {
    if (step === 2) setStep(1); 
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <ScrollView className="app-background h-full">
        <View className="bg-slate-900 pb-8 pt-16 px-6 mb-8 flex flex-col items-start">
          <Logo
            showText={false}
            logoBackground="dark:bg-white bg-white/90 p-2  rounded-xl"
          />

          <Text className=" mt-5 text-start line-clamp-3  text-4xl text-white font-jetBold mb-4">
            {step === 1 ? "Create your Account" : "Almost Done"}
          </Text>
        </View>

        <View className="mx-5">
          {/* Step 1: Email, Name, Password */}
          {step === 1 && (
            <>
              <FormInput
                title="Name"
                value={form.name}
                placeholder="Enter your name"
                handleChange={(text) => handleChange("name", text)}
                styles=" my-4"
                icon={icons.user}
              />
              <FormInput
                title="Email"
                value={form.email}
                placeholder="Enter your email"
                handleChange={(text) => handleChange("email", text)}
                keyBoardType="email-address"
                styles="my-4"
                icon={icons.email}
              />

              <FormInput
                title="Password"
                value={form.password}
                placeholder="Enter your password"
                handleChange={(text) => handleChange("password", text)}
                styles=" my-4"
                icon={icons.password}
              />

              <TouchableOpacity
                onPress={handleNext}
                className="bg-lime-500 dark:bg-lime-600 py-5 rounded-lg mt-5"
              >
                <Text className="text-center text-white/90 text-xl font-sansBold tracking-wider">
                  Next
                </Text>
              </TouchableOpacity>
            </>
          )}

          {/* Step 2: Age, Weight, Gender, Height, Activity Level */}
          {step === 2 && (
            <>
              <View className="flex-row gap-3">
                <FormInput
                  title="Age"
                  value={form.age}
                  placeholder="Age"
                  handleChange={(text) => handleChange("age", text)}
                  keyBoardType="numeric"
                  styles="my-4 flex-grow "
                  label="Y"
                />
                <FormPicker
                title="Activity Level"
                value={form.gender}
                handleChange={(text) => handleChange("gender", text)}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                  { label: "Other", value: "other" },
                  
                ]}
                styles="my-4 w-1/2"
                icon={icons.gender}
              />
              </View>

              <View className="flex-row gap-3">
                <FormInput
                  title="Weight"
                  value={form.weight}
                  placeholder="Weight"
                  handleChange={(text) => handleChange("weight", text)}
                  keyBoardType="numeric"
                  styles="flex-grow my-4"
                  label="KG"
                />

                <FormInput
                  title="Height"
                  value={form.height}
                  placeholder="Height"
                  handleChange={(text) => handleChange("height", text)}
                  keyBoardType="numeric"
                  styles="flex-grow my-4"
                  label="cm"
                />
              </View>

              <FormPicker
                title="Activity Level"
                value={form.activityLevel}
                handleChange={(text) => handleChange("activityLevel", text)}
                options={[
                  { label: "Sedentary", value: "sedentary" },
                  { label: "Light", value: "light" },
                  { label: "Moderate", value: "moderate" },
                  { label: "Active", value: "active" },
                  { label: "Very Active", value: "very_active" },
                ]}
                styles="my-4"
                icon={icons.run}
              />

              <View className="flex-row justify-between mt-5">
                <TouchableOpacity
                  onPress={handleBack}
                  className="bg-gray-500 dark:bg-gray-600 py-5 rounded-lg flex-1 mr-2"
                >
                  <Text className="text-center text-white/90 text-xl font-sansBold tracking-wider">
                    Back
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleSubmit}
                  className="bg-lime-500 dark:bg-lime-600 py-5 rounded-lg flex-1 ml-2"
                  disabled={isSubmitting}
                >
                  <Text className="text-center text-white/90 text-xl font-sansBold tracking-wider">
                    {isSubmitting ? "Loading..." : "Submit"}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>

        {/* Already Registered */}
        <View className="mt-8 mb-3 flex-row justify-center items-center">
          <Text className="text-gray-500">Already a member? </Text>
          <TouchableOpacity onPress={() => router.push("/sign-in")}>
            <Text className="text-lime-500 dark:text-lime-300 font-jetBold mx-1">
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
