import { Pressable, Text } from "react-native";
import style from "./AddButton.style";

import { DrinkRecord } from "@/types/drinkTypes";

interface Prop {
    addDrink: (test: DrinkRecord) => void
    drink: DrinkRecord
}

function AddButton({addDrink, drink}: Prop) {

    return (
        <Pressable
            onPress={() => addDrink(drink)}
            style={({ pressed }) => [
                style.component,
                pressed && style.pressed,
            ]}
        >
            <Text style={style.text}>+ {drink.volume} ml</Text>
        </Pressable>
    );
}

export default AddButton;