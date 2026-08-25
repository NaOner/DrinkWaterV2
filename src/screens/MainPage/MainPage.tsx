import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { AddButton } from "@/components/AddButton";
import { Drink } from "@/components/Drink";
import { UndoButton } from "@/components/UndoButton";
import { Counter } from "@/components/Counter";

import { PRESETS } from "@/constants/drinkConsts"

function MainPage() {
    const [selectedId, setSelectedId] = useState<string>(PRESETS[0].id);
    const [sum, setSum] = useState<number>(0)

    const selected = PRESETS.find((p) => p.id === selectedId) || PRESETS[0];

    return (
        <SafeAreaView
            style={{
                flex: 1
        }}>
            <Counter
                current={sum}
                goal={2000}
            />
            <View
                style={{
                    flexDirection: "row",
                    gap: 9,
                    padding: 16
            }}>
                {PRESETS.map((preset) => (
                    <Drink
                        key={preset.id}
                        drink={preset}
                        selected={preset.id === selectedId}
                        onPress={() => setSelectedId(preset.id)}
                    />
                ))}
            </View>

            <AddButton
                drink={selected}
                amount={selected.volume}
            />
            <UndoButton/>
        </SafeAreaView>
    );
}

export default MainPage;