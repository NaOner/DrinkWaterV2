export const DRINK_TYPE_ENUM = {
  Water: "Water",
  Tea: "Tea",
  Coffee: "Coffee",
} as const;

export type TypesOfDrinks =
  (typeof DRINK_TYPE_ENUM)[keyof typeof DRINK_TYPE_ENUM];

export interface DrinkRecord {
  id: string;
  volume: number;
  type: TypesOfDrinks;
  date: number;
}

export interface DayRecordInHistory {
  limit: number;
  date: number;
  history: DrinkRecord[];
}

export interface DrinkItem {
  id: string;
  volume: number;
  type: TypesOfDrinks;
}
