import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Crypto from "expo-crypto";
import { useCallback, useEffect, useState } from "react";

import { STORAGE_KEYS } from "@/constants/StorageKeys";
import { DrinkItem, DrinkRecord } from "@/types/drinkTypes";

interface UseDrinkRecordsReturn {
  drinkRecords: DrinkRecord[];
  sum: number;
  addDrink: (drink: DrinkItem) => void;
  undoLastDrink: () => void;
  refetch: () => void;
}

function parseDrinkRecords(json: string): DrinkRecord[] {
  return JSON.parse(json) as DrinkRecord[];
}

export function useDrinkRecords(): UseDrinkRecordsReturn {
  const [drinkRecords, setDrinkRecords] = useState<DrinkRecord[]>([]);

  const fetchDrinkRecords = useCallback(async () => {
    try {
      const json = await AsyncStorage.getItem(STORAGE_KEYS.DRINK_RECORDS);
      if (json === null) return [];
      setDrinkRecords(parseDrinkRecords(json));
    } catch (e) {
      console.log("Error, while fetching data");
    }
  }, []);

  useEffect(() => {
    void fetchDrinkRecords();
  }, [fetchDrinkRecords]);

  const saveDrinkRecords = useCallback(async (records: DrinkRecord[]) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.DRINK_RECORDS,
        JSON.stringify(records),
      );
    } catch (e) {
      console.log("Error, while saving data");
    }
  }, []);

  const addDrink = useCallback(
    (drink: DrinkItem) => {
      const addDate = (element: DrinkItem): DrinkRecord => {
        return {
          ...element,
          date: Date.now(),
        };
      };
      const drinkWithDate = addDate(drink);

      drinkWithDate.id = Crypto.randomUUID();

      setDrinkRecords((prev) => {
        const updated = [drinkWithDate, ...prev];

        console.log(updated);

        void saveDrinkRecords(updated);
        return updated;
      });
    },
    [drinkRecords, saveDrinkRecords],
  );

  const undoLastDrink = useCallback(() => {
    setDrinkRecords((prev) => {
      const updated = prev.slice(1);
      void saveDrinkRecords(updated);
      return updated;
    });
  }, [drinkRecords, saveDrinkRecords]);

  const sum = drinkRecords.reduce((acc, record) => {
    acc += record.volume;
    return acc;
  }, 0);

  return {
    drinkRecords,
    sum,
    addDrink,
    undoLastDrink,
    refetch: fetchDrinkRecords,
  };
}
