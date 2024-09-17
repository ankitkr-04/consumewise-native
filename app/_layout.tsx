import { Stack } from "expo-router";
import React from "react";
import "../app/globals.css";




export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
