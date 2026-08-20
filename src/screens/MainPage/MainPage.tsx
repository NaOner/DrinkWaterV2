// src/screens/MainPage/MainPage.tsx
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import AddButton from "@/components/AddButton/AddButton";
import Drink from "@/components/Drink/Drink";
import {PRESETS} from "@/constants/Drinks"

function MainPage() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selected = PRESETS.find((p) => p.id === selectedId);

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                amount={selected?.amount ?? 200}
                // TODO: W przyszłości po naciśnięciu przycisku ma być tworzony obiekt z typem, objętością i datą utworzenia i ma być zapisywany do historii
                onPress={() => console.log("dodaję", selected)}
            />
        </SafeAreaView>
    );
}

export default MainPage;