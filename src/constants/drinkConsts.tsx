import {DRINK_TYPE_ENUM, DrinkType, DrinkRecord} from "@/types/drinkTypes";
import {ImageSourcePropType} from "react-native";

export const DRINK_IMAGES: Record<DrinkType, ImageSourcePropType> = {
    [DRINK_TYPE_ENUM.Water]: require("@/assets/images/Drinks/water.png"),
    [DRINK_TYPE_ENUM.Tea]: require("@/assets/images/Drinks/tea.png"),
    [DRINK_TYPE_ENUM.Coffee]: require("@/assets/images/Drinks/coffee.png"),
} as const

export const PRESETS = [
    { id: "water-200",  volume: 200, type: DRINK_TYPE_ENUM.Water},
    { id: "tea-300",    volume: 300, type: DRINK_TYPE_ENUM.Tea},
    { id: "coffee-100", volume: 100, type: DRINK_TYPE_ENUM.Coffee },
] as const satisfies readonly DrinkRecord[]

export type DrinkId = (typeof PRESETS)[number]["id"]