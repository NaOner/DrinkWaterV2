import {SvgProps} from "react-native-svg";
import React from "react";

export type DrinkType = "water" | "tea" | "coffee" | "glass"

export type Drink = {
    image: React.FC<SvgProps>,
    type: DrinkType,
    amount: number
}

export type DrinkComponentTypes = {
    type: DrinkType
    amount: number
    selected: boolean
    onPress?: () => void,
}
