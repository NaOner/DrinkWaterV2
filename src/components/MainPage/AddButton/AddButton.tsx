import { Pressable, Text } from "react-native";
import style from "./AddButton.style";

import { DrinkPreset } from "@/types/drinkTypes";

interface Prop {
  addDrink: (test: DrinkPreset) => void;
  drink: DrinkPreset;
}

function AddButton({ addDrink, drink }: Prop) {
  return (
    <Pressable
      onPress={() => addDrink(drink)}
      style={({ pressed }) => [style.component, pressed && style.pressed]}
    >
      <Text style={style.text}>+ {drink.volume} ml</Text>
    </Pressable>
  );
}

export default AddButton;
