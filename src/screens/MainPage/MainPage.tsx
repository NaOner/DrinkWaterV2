// from library
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useState} from "react";
// custom components or other files
import style from "@/screens/MainPage/MainPage.style";
import AddButton from "@/components/AddButton/AddButton";
import Drink from "@/components/Drink/Drink";
import { UndoButton } from "@/components/UndoButton";
import { Counter } from "@/components/Counter";
// consts and types
import { PRESETS } from "@/constants/DrinkConsts";
import { type DrinkType } from "@/types/DrinkTypes";

function findSelected(selectedType: DrinkType){
    return PRESETS.find((p) => p.type === selectedType) || PRESETS[0];
}

function MainPage() {

    const [sum, setSum] = useState<number>(0)
    const [drinkType, setDrinkType] = useState<DrinkType>("water")

    const selected = findSelected(drinkType)

    return (
        <SafeAreaView>
            <Counter current={sum} goal={2000}/>
            <View style={style.drinksRow}>
                {PRESETS.map((preset) => (
                    <Drink
                        key={preset.type}
                        amount={preset.amount}
                        type={preset.type}
                        selected={preset.type === drinkType}
                        onPress={() => setDrinkType(preset.type)}
                />))}
            </View>
            <AddButton amount={selected.amount}/>
            <UndoButton/>
        </SafeAreaView>
    );
}

export default MainPage;