import Loading from "@/components/Loading";
import OAuthButton from "@/components/OAuthButton";
import IconButton from "@/components/ui/IconButton";
import { icons } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { signOut } from "@/lib/appwrite";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const { isLogged, loading, user, setIsLogged, setUser } = useGlobalContext();
  const handleLogout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/home");
  };
  const handleSignIn = () => {
    router.push("/sign-in");
  };

  if (loading)
    return (
      <SafeAreaView className="h-[100vh] ">
        <View className="flex items-center h-full justify-center">
          <Loading />
        </View>
      </SafeAreaView>
    );
  return (
    <SafeAreaView className="h-full">
      {isLogged ? (
        <ScrollView className="app-background h-full py-3">
          <View className="flex-row items-center my-3 mx-auto w-[90%]">
            <View></View>
            <Text className="text-18 flex-grow  text-center ml-8 font-sansBold">
              Profile
            </Text>

            <IconButton
              icon={icons.logout}
              onPress={handleLogout}
              tintColor="#777777"
            />
          </View>

          <View className="my-4 items-start mx-auto w-[90%] flex ">
            <View
              className={` rounded-full ${user?.avatar ? "bg-white" : "p-2 bg-gray-300 dark:bg-gray-700"} -scroll-my-3 ml-2  `}
            >
              <Image
                source={user?.avatar ? { uri: user?.avatar } : icons.user}
                className="w-20 h-20 rounded-full "
                tintColor={user?.avatar ? "" : "#777"}
              />
            </View>

            <Text className="text-32 capitalize tracking-wider font-jetBold mt-3">
              {user?.name}
            </Text>
            <Text className="text-18 font-sansRegular my-1 capitalize">
              {user?.age}, {user?.gender}
            </Text>
            {/* <Text className="text-18 font-sansRegular ">{user?.email}</Text> */}
          </View>

          {/* Button */}

          <View className="flex w-[90%] mx-auto flex-row items-center gap-4">
            <OAuthButton label="Change Photo" />
            <OAuthButton
              label="Edit Profile"
              otherStyles="bg-lime-400 dark:bg-lime-700 "
              textStyles="text-white/90 !font-sansBold "
            />
          </View>
        </ScrollView>
      ) : (
        <View className="flex items-center h-full app-background justify-center">
          <Text className="text-18">Please sign in to view your profile</Text>
          <TouchableOpacity
            className="px-8 py-3 mt-4 rounded-xl bg-purple-700"
            onPress={handleSignIn}
          >
            <Text className="text-14">Sign In</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;
