import Water from "@/assets/images/Drinks/water.svg"
import Glass from "@/assets/images/Drinks/glass.svg"
import Tea from "@/assets/images/Drinks/tea.svg"
import Coffee from "@/assets/images/Drinks/coffee.svg"

export const DRINK_ICONS = {
    water: Water,
    glass: Glass,
    tea: Tea,
    coffee: Coffee
} as const

export type DrinkType = keyof typeof DRINK_ICONS

export const PRESETS: { id: string; amount: number; type: DrinkType }[] = [
    { id: "water-200",  amount: 200, type: "water" },
    { id: "tea-300",    amount: 300, type: "tea" },
    { id: "coffee-100", amount: 100, type: "coffee" },
    { id: "glass-250",  amount: 250, type: "glass" },
] as const