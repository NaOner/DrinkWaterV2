import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="SettingPage" options={{ title: "Settings" }} />
      <Tabs.Screen name="HistoryPage" options={{ title: "History" }} />
      <Tabs.Screen name="MainPage" options={{ title: "Main" }} />
      <Tabs.Screen name="CalendarPage" options={{ title: "Calendar" }} />
    </Tabs>
  );
}
