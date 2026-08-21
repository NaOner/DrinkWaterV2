import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useState} from "react";
import * as Crypto from "expo-crypto";

import AddButton from "@/components/AddButton/AddButton";
import Drink from "@/components/Drink/Drink";
import {UndoButton} from "@/components/UndoButton";
import {Counter} from "@/components/Counter";

import {DrinkType, PRESETS} from "@/constants/Drinks"
import {DrinkEntry} from "@/constants/Drinks";

function MainPage() {
    const [selectedId, setSelectedId] = useState<string>("water");
    const [sum, setSum] = useState<number>(0)
    const [history, setHistory] = useState<DrinkEntry[]>([])


    function handleAdd(amount: number, type: DrinkType) {
        const drink: DrinkEntry = {
            id: Crypto.randomUUID(),
            at: Date.now(),
            type: type,
            amount: amount
        }
        setSum((prev) => prev + amount)
        setHistory((drinks) => [drink, ...drinks])
        console.log(history)
    }

    function handleUndo(){
        if(history.length > 0){
            setHistory((history) => history.slice(1))
            setSum((sum) => sum - history[0].amount)
        }
    }

    const selected = PRESETS.find((p) => p.id === selectedId) || PRESETS[0];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Counter current={sum} goal={2000}/>
            <View style={{ flexDirection: "row", gap: 9, padding: 16 }}>
                {PRESETS.map((preset) => (
                    <Drink
                        key={preset.id}
                        amount={preset.amount}
                        type={preset.type}
                        selected={preset.id === selectedId}
                        onPress={() => setSelectedId(preset.id)}
                    />
                ))}
            </View>

            <AddButton
                amount={selected.amount}
                onPress={() => handleAdd(selected.amount, selected.type)}
            />
            <UndoButton onPress={() => {handleUndo()}}/>
        </SafeAreaView>
    );
}

export default MainPage;