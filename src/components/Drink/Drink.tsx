import {Text, Pressable} from "react-native";
import style from "./Drink.style"
import React from "react";

import {DRINK_IMAGES} from "@/constants/drinkConsts";
import { DrinkRecord } from "@/types/drinkTypes";
import {Image} from "expo-image";

interface Props {
    selected?: boolean,
    onPress?: () => void,
    drink: DrinkRecord
}

function Drink({selected = false, onPress, drink }: Props){

    return(
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                style.component,
                selected && style.selected,
                pressed && style.pressed,
            ]}
        >
            <Image source={DRINK_IMAGES[drink.type]}
                   style={{
                       width: 44,
                       height: 44
            }}/>
            <Text style={style.text}>{drink.type}</Text>
            <Text style={style.text}>{drink.volume} ml</Text>
        </Pressable>
    )
}

export default Drink