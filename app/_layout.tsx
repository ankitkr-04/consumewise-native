import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { colorScheme } from "nativewind";
import React, { useEffect } from "react";
import "../app/globals.css";

colorScheme.set("system");
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontLoaded, error] = useFonts({
    "JetBrains-Mono": require("../assets/fonts/JetBrainsMono-Regular.ttf"),
    "JetBrains-Mono-Bold": require("../assets/fonts/JetBrainsMono-Bold.ttf"),
    "JetBrains-Mono-Italic": require("../assets/fonts/JetBrainsMono-Italic.ttf"),
    "JetBrains-Mono-SemiBold": require("../assets/fonts/JetBrainsMono-SemiBold.ttf"),
    "JetBrains-Mono-Thin": require("../assets/fonts/JetBrainsMono-Thin.ttf"),
    "Open-Sans": require("../assets/fonts/OpenSans-Regular.ttf"),
    "Open-Sans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    "Open-Sans-Italic": require("../assets/fonts/OpenSans-Italic.ttf"),
    "Open-Sans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
    "Open-Sans-Light": require("../assets/fonts/OpenSans-Light.ttf"),
    "Open-Sans-ExtraBold": require("../assets/fonts/OpenSans-ExtraBold.ttf"),
    "Open-Sans-BoldItalic": require("../assets/fonts/OpenSans-BoldItalic.ttf"),
    "Montserrat-Alternates-Bold": require("../assets/fonts/MontserratAlternates-Bold.ttf"),
  });
  useEffect(() => {
    const setTheme = async () => {
      try {
        const theme = await AsyncStorage.getItem("theme");
        if (theme) {
          colorScheme.set(theme as "light" | "dark" | "system");
        } else {
          colorScheme.set("system");
        }
      } catch (error) {
        console.error("Failed to load theme from storage", error);
      }
    };
    setTheme();
  }, []);
  useEffect(() => {
    if (error) throw error;
    if (fontLoaded) SplashScreen.hideAsync();
  }, [fontLoaded, error]);

  if (!fontLoaded && !error) return null;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
