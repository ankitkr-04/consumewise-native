import { Tabs } from "expo-router";

const HomeLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ headerShown: false }} />
    </Tabs>
  );
};
export default HomeLayout;
