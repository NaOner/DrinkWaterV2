import {Tabs} from "expo-router";

export default function TabLayout(){
    return(
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen name="index" options={{title: "Main"}}/>
            <Tabs.Screen name="HistoryPage" options={{title: "History"}}/>
        </Tabs>
    )
}