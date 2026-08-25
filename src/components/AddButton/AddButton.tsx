import { Pressable, Text } from "react-native";
import style from "./AddButton.style";

import { DrinkPreset } from "@/types/drinkTypes";

interface Props {
    amount: number;
    drink: DrinkPreset
}

function AddButton({ drink }: Props) {

    function handleAdd(drink: DrinkPreset){

        const saveData = async () => {
            try {



            } catch (e){
                console.log("Saving data failed")
            }
        }
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