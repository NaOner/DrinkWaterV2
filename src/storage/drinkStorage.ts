import AsyncStorage from "@react-native-async-storage/async-storage";
import {useCallback, useEffect, useState} from "react";

import { DrinkType, DrinkRecord } from "@/types/drinkTypes";
import { STORAGE_KEYS } from "@/constants/storage";
import { DrinkId } from "@/constants/drinkConsts";

interface UseDrinkRecordsReturn {
    drinkRecords: DrinkRecord[];
    addDrink: (id: DrinkId, type: DrinkType, volume: number) => void;
    undoLastDrink: () => void;
}

function parseDrinkRecords(json: string): DrinkRecord[] {
    return JSON.parse(json)
}

export function useDrinkRecords(): UseDrinkRecordsReturn{
    const [drinkRecords, setDrinkRecords] = useState<DrinkRecord[]>([])

    const fetchDrinkRecords = useCallback(async () => {
        try {
            const json = await AsyncStorage.getItem(STORAGE_KEYS.DRINK_RECORDS)
            if (!json) return []
            else setDrinkRecords(parseDrinkRecords(json))
        } catch(e){
            console.log("Error, while fetching data")
        }
    },[])

    useEffect(() => {
        void fetchDrinkRecords();
    }, [fetchDrinkRecords]);

    const saveDrinkRecords = useCallback(async (records: DrinkRecord[]) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.DRINK_RECORDS, JSON.stringify(records))
        } catch (e) {
            console.log("Error, while saving data")
        }
    },[])

    const addDrink = useCallback((id: DrinkId, type: DrinkType, volume: number) => {
        const drink: DrinkRecord = {
            id,
            type,
            volume,
        }
        const updated = [drink, ...drinkRecords]

        setDrinkRecords(updated)
        void saveDrinkRecords(updated)

    },[drinkRecords, saveDrinkRecords])

    const undoLastDrink = useCallback(() => {
        const updated = drinkRecords.slice(1)

        setDrinkRecords(updated)
        void saveDrinkRecords(updated)

    }, [drinkRecords, saveDrinkRecords])

    return {drinkRecords, addDrink, undoLastDrink}
}