import { Pressable, Text } from "react-native";
import style from "./AddButton.style";

import { useDrinkRecords } from "@/storage/drinkStorage";
import { DrinkRecord } from "@/types/drinkTypes";

function AddButton( drink: DrinkRecord) {

    

    function handleAdd(drink: DrinkRecord){


        console.log(drink)

        return null
    }

    return (
        <Pressable
            onPress={() => handleAdd(drink)}
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