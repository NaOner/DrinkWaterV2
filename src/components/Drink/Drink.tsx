import {Text, Pressable} from "react-native";
import style from "./Drink.style"
import React from "react";

import {DRINK_ICONS} from "@/constants/Drinks";
import {DrinkType} from "@/constants/Drinks";

type Props = {
    amount: number,
    type: DrinkType,
    selected?: boolean,
    onPress?: () => void,
}

function Drink({amount, type, selected = false, onPress }: Props){

    const Icon = DRINK_ICONS[type]

    return(
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                style.component,
                selected && style.selected,
                pressed && style.pressed,      // ← ostatni, więc nadpisuje kolor selected
            ]}
        >
            <Icon width={44} height={44} />
            <Text style={style.text}>{type}</Text>
            <Text style={style.text}>{amount} ml</Text>
        </Pressable>
    )
}

export default Drink