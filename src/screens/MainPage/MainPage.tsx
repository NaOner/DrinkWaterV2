import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useCallback, useState} from "react";

import { AddButton } from "@/components/AddButton";
import { Drink } from "@/components/Drink";
import { UndoButton } from "@/components/UndoButton";
import { Counter } from "@/components/Counter";

import { PRESETS } from "@/constants/drinkConsts"
import { useDrinkRecords } from "@/hooks/useDrinkRecords";
import { styles } from "./MainPage.styles";

import useForms, {useLimit} from "@/hooks/useForms";
import {useFocusEffect} from "expo-router";


function MainPage() {
    const {sum, addDrink, undoLastDrink} = useDrinkRecords()
    // TO DO: Nie działa prawidłowo limit poniewaz po wyjściu z main page i ponownym wejśćiu licznik się zeruje
    const { refetch, limit} = useLimit()
    const [selectedId, setSelectedId] = useState<string>(PRESETS[0].id);

    const selected = PRESETS.find((p) => p.id === selectedId) || PRESETS[0];

    useFocusEffect(
        useCallback(() => {
            void refetch()
        }, [refetch])
    )

    return (
        <SafeAreaView style={styles.container}>
            <Counter
                current={sum}
                goal={limit}
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