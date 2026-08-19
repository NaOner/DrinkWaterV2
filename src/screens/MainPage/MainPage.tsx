import { SafeAreaView } from "react-native-safe-area-context";

import AddButton from "@/components/AddButton/AddButton";

function MainPage(){
    return(
        <SafeAreaView>
            <AddButton amount={0}></AddButton>
        </SafeAreaView>
    )
}

export default MainPage