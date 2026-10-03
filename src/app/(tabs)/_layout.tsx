import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="SettingsPage" options={{ title: "Settings" }} />
      <Tabs.Screen name="HistoryPage" options={{ title: "History" }} />
      <Tabs.Screen name="MainPage" options={{ title: "Main" }} />
    </Tabs>
  );
}
