import FormInput from "@/components/FormInput";
import Logo from "@/components/Logo";
import OAuthButton from "@/components/OAuthButton";
import TextSeparator from "@/components/ui/TextSeparator";
import { icons } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import useForm, { FormState } from "@/hooks/useForm";
import { getCurrentUser, signIn } from "@/lib/appwrite";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SignInFormState extends FormState {
  email: string;
  password: string;
}

const SignIn = () => {
  const { setIsLogged, setUser } = useGlobalContext();

  const { form, isSubmitting, handleChange, handleSubmit } =
    useForm<SignInFormState>({
      initialValues: { email: "", password: "" },
      onSubmit: async ({ email, password }) => {
        await signIn(email, password);
        const currUser = await getCurrentUser();
        setUser(currUser);
        setIsLogged(true);
        router.replace("/home");
      },
    });

  return (
    <SafeAreaView className="flex-1  justify-center items-center">
      <ScrollView className="app-background h-full">
        <View className="bg-slate-900 pb-8 pt-16 px-6 mb-8 flex flex-col items-start">
          <Logo
            showText={false}
            logoBackground="dark:bg-white bg-white/90 p-2  rounded-xl"
          />

          <Text className=" mt-5 text-start line-clamp-3  text-4xl text-white font-jetBold mb-4">
            Sign in to your Account
          </Text>
        </View>

        <View className="mx-5 ">
          {/* Email Input */}
          <FormInput
            title="Email"
            value={form.email}
            placeholder="Enter your email"
            handleChange={(text) => handleChange("email", text)}
            keyBoardType="email-address"
            styles="my-4"
            icon={icons.email}
          />

          {/* Password Input */}
          <FormInput
            title="Password"
            value={form.password}
            placeholder="Enter your password"
            handleChange={(text) => handleChange("password", text)}
            styles=" my-4"
            icon={icons.password}
          />

          <TouchableOpacity className="self-end mb-5 mx-1 my-2 ">
            <Text className="text-lime-600 font-jetBold">Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-lime-500 dark:bg-lime-600 py-5 rounded-lg"
          >
            <Text className="text-center text-white/90 text-xl font-sansBold tracking-wider">
              Login
            </Text>
          </TouchableOpacity>
          <TextSeparator space="py-6" label="Or continue with" />
          {/* OAUTH Links */}
          <View className="flex-row w-full gap-2">
            <OAuthButton icon={icons.google} label="Google" />
            <OAuthButton icon={icons.facebook} label="Facebook" />
          </View>
        </View>

        {/* Sign-up Link */}
        <View className="mt-8 flex-row justify-center items-center">
          <Text className="text-gray-500">Not a member? </Text>
          <TouchableOpacity>
            <Text className="text-lime-500 dark:text-lime-300 font-jetBold mx-1">
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
