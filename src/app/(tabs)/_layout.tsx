import {Tabs} from "expo-router";

export default function TabLayout(){
    return(
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen name="FormPage" options={{title: "Form"}}/>
            <Tabs.Screen name="index" options={{title: "Main"}}/>
            <Tabs.Screen name="HistoryPage" options={{title: "History"}}/>
        </Tabs>
    )
}