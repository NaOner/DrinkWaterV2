import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./MainPage.styles";

import { useDrinkRecords } from "@/hooks/useDrinkRecords";
import { useSetupForms } from "@/hooks/useSetupForms";
import { useEffect, useState } from "react";

import { AddButton } from "@/components/MainPage/AddButton";
import { Counter } from "@/components/MainPage/Counter";
import { Drink } from "@/components/MainPage/Drink";
import { UndoButton } from "@/components/MainPage/UndoButton";

import { PRESETS } from "@/constants/drinkConsts";

function MainPage() {
  const { sum, addDrink, undoLastDrink } = useDrinkRecords();
  const { userData, refetch } = useSetupForms();

  useEffect(() => {
    void refetch();
  }, []);

  const [selectedId, setSelectedId] = useState<string>(PRESETS[0].id);

  const selected = PRESETS.find((p) => p.id === selectedId) || PRESETS[0];

  return (
    <SafeAreaView style={styles.container}>
      <Counter current={sum} goal={userData.limit} />
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

      <AddButton addDrink={addDrink} drink={selected} />
      <UndoButton onUndo={undoLastDrink} />
    </SafeAreaView>
  );
}

export default MainPage;
