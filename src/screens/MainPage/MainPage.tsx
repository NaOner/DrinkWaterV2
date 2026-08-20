import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import AddButton from "@/components/AddButton/AddButton";
import Drink from "@/components/Drink/Drink";
import {UndoButton} from "@/components/UndoButton";
import {Counter} from "@/components/Counter";
import {PRESETS} from "@/constants/Drinks"

function MainPage() {
    const [selectedId, setSelectedId] = useState<string>("water");
    const [sum, setSum] = useState<number>(0)

    function handleAdd(num: number) {
        setSum((prev) => prev + num)
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
                onPress={() => handleAdd(selected.amount)}
            />
            <UndoButton onPress={() => {}}/>
        </SafeAreaView>
    );
}

export default MainPage;