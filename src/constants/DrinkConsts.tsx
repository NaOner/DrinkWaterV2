import Water from "@/assets/images/Drinks/water.svg"
import Glass from "@/assets/images/Drinks/glass.svg"
import Tea from "@/assets/images/Drinks/tea.svg"
import Coffee from "@/assets/images/Drinks/coffee.svg"

import {type Drink} from "@/types/DrinkTypes";

export const DRINK_ICONS = {
    water: Water,
    glass: Glass,
    tea: Tea,
    coffee: Coffee,
} as const

export const DRINK_TYPES = {
    water: "water",
    tea: "tea",
    coffee: "coffee",
    glass: "glass",
} as const


export const PRESETS: Drink[] = [
    { type: "water",  image: DRINK_ICONS.water,  amount: 200 },
    { type: "tea",    image: DRINK_ICONS.tea,    amount: 200 },
    { type: "coffee", image: DRINK_ICONS.coffee, amount: 200 },
    { type: "glass",  image: DRINK_ICONS.glass,  amount: 200 },
]
