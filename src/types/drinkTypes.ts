export const DRINK_TYPE_ENUM = {
    Water: "Water",
    Tea: "Tea",
    Coffee: "Coffee",
} as const

export type DrinkType = (typeof DRINK_TYPE_ENUM)[keyof typeof DRINK_TYPE_ENUM]

export interface DrinkRecord {
    id: string,
    volume: number,
    type: DrinkType,
}


