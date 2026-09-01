import AsyncStorage from "@react-native-async-storage/async-storage";
import {useCallback, useEffect, useState} from "react";
import * as Crypto from "expo-crypto"

import {DrinkRecord, DrinkRecordWithDate} from "@/types/drinkTypes";
import { STORAGE_KEYS } from "@/constants/storage";

interface UseDrinkRecordsReturn {
    drinkRecords: DrinkRecordWithDate[];
    sum: number;
    addDrink: (drink: DrinkRecord) => void;
    undoLastDrink: () => void;
    refetch: () => void;
}

function parseDrinkRecords(json: string): DrinkRecordWithDate[] {
    return JSON.parse(json) as DrinkRecordWithDate[]
}

export function useDrinkRecords(): UseDrinkRecordsReturn{
    const [drinkRecords, setDrinkRecords] = useState<DrinkRecordWithDate[]>([])

    const fetchDrinkRecords = useCallback(async () => {
        try {
            const json = await AsyncStorage.getItem(STORAGE_KEYS.DRINK_RECORDS)
            if (json === null) return []
            setDrinkRecords(parseDrinkRecords(json))
        } catch(e){
            console.log("Error, while fetching data")
        }
    },[])

    useEffect(() => {
        void fetchDrinkRecords();
    }, [fetchDrinkRecords]);

    const saveDrinkRecords = useCallback(async (records: DrinkRecordWithDate[]) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.DRINK_RECORDS, JSON.stringify(records))
        } catch (e) {
            console.log("Error, while saving data")
        }
    },[])

    const addDrink = useCallback((drink: DrinkRecord) => {
        const addDate = (element: DrinkRecord): DrinkRecordWithDate => {
            return {
                ...element,
                date: Date.now()
            }
        }
        const drinkWithDate = addDate(drink)

        drinkWithDate.id = Crypto.randomUUID()

        setDrinkRecords(prev => {
            const updated = [drinkWithDate, ...prev]

            console.log(updated)

            void saveDrinkRecords(updated)
            return updated
        })

    },[drinkRecords, saveDrinkRecords])

    const undoLastDrink = useCallback(() => {
        setDrinkRecords((prev) => {
            const updated = prev.slice(1)
            void saveDrinkRecords(updated)
            return updated
        })
    }, [drinkRecords, saveDrinkRecords])

    const sum = drinkRecords.reduce((acc, record) => {
            acc += record.volume
            return acc
        }, 0)

    return {drinkRecords, sum, addDrink, undoLastDrink, refetch: fetchDrinkRecords}
}