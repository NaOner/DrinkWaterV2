import { DRINK_TYPE_ENUM, DrinkItem, TypesOfDrinks } from "@/types/drinkTypes";
import { ImageSourcePropType } from "react-native";

export const DRINK_IMAGES: Record<TypesOfDrinks, ImageSourcePropType> = {
  [DRINK_TYPE_ENUM.Water]: require("@/assets/images/Drinks/water.png"),
  [DRINK_TYPE_ENUM.Tea]: require("@/assets/images/Drinks/tea.png"),
  [DRINK_TYPE_ENUM.Coffee]: require("@/assets/images/Drinks/coffee.png"),
} as const;

export const PRESETS: DrinkItem[] = [
  { id: "water-200", volume: 200, type: DRINK_TYPE_ENUM.Water },
  { id: "tea-300", volume: 300, type: DRINK_TYPE_ENUM.Tea },
  { id: "coffee-100", volume: 100, type: DRINK_TYPE_ENUM.Coffee },
] as const;
