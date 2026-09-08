import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./MainPage.styles";

import { useDrinkRecords } from "@/hooks/useDrinkRecords";
import { useForms } from "@/hooks/useForms";
import { useState } from "react";

import { AddButton } from "@/components/AddButton";
import { Drink } from "@/components/Drink";
import { UndoButton } from "@/components/UndoButton";
import { Counter } from "@/components/Counter";

import { PRESETS } from "@/constants/drinkConsts"
import {useFocusEffect} from "expo-router";

function MainPage() {
    const {sum, addDrink, undoLastDrink} = useDrinkRecords()
    const {userRecords, refetch} = useForms()

    useFocusEffect(() => {
        void refetch()
    })

    const [selectedId, setSelectedId] = useState<string>(PRESETS[0].id);

    const selected = PRESETS.find((p) => p.id === selectedId) || PRESETS[0];

    return (
        <SafeAreaView style={styles.container}>
            <Counter
                current={sum}
                goal={userRecords.limit}
            />
            <View style={styles.presetsRow}>
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
                addDrink={addDrink}
                drink={selected}
            />
            <UndoButton
                onUndo={undoLastDrink}
            />
        </SafeAreaView>
    );
}

export default MainPage;