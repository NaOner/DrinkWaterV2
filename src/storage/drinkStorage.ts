import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

import { DrinkRecord } from "@/types/drinkTypes";
import { STORAGE_KEYS } from "@/constants/storage";

interface UseDrinkRecordsReturn {
    drinkRecords: DrinkRecord[];
    sum: number;
    addDrink: (drink: DrinkRecord) => void;
    undoLastDrink: () => void;
}

function parseDrinkRecords(json: string): DrinkRecord[] {
    return JSON.parse(json) as DrinkRecord[]
}

export function useDrinkRecords(): UseDrinkRecordsReturn{
    const [drinkRecords, setDrinkRecords] = useState<DrinkRecord[]>([])
    const [sum, setSum] = useState<number>(0)

    // Wyciąga z async -----------------------------------//
    const fetchDrinkRecords = useCallback(async () => {
        try {
            const json = await AsyncStorage.getItem(STORAGE_KEYS.DRINK_RECORDS)
            if (json === null) return []
            setDrinkRecords(parseDrinkRecords(json))
        } catch(e){
            console.log("Error, while fetching data")
        }
    },[])
    //---------------------------------------------------//

    // Odpala przy odpaleniu aplikacji --------------//
    useEffect(() => {
        void fetchDrinkRecords();
    }, [fetchDrinkRecords]);
    //---------------------------------------------- //

    // Zapisuje do async ----------------//
    const saveDrinkRecords = useCallback(async (records: DrinkRecord[]) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.DRINK_RECORDS, JSON.stringify(records))
        } catch (e) {
            console.log("Error, while saving data")
        }
    },[])
    //----------------------------------//

    // Nazwa mówi sama za siebie ----------------//
    const addDrink = useCallback((drink: DrinkRecord) => {
        const updated = [drink, ...drinkRecords]

        console.log(updated)

        setDrinkRecords((updated))
        void saveDrinkRecords(updated)

    },[drinkRecords, saveDrinkRecords])
    //------------------------------------------//

    const undoLastDrink = useCallback(() => {
        const updated = drinkRecords.slice(1)

        setDrinkRecords((updated))
        void saveDrinkRecords(updated)

    }, [drinkRecords, saveDrinkRecords])

    const countSum = useCallback((records: DrinkRecord[]) => {
        const number = records.reduce((acc, record) => {
            acc += record.volume
            return acc
        }, 0)
        setSum(number)
    }, [sum])

    useEffect(() => {
        countSum(drinkRecords)
    }, [saveDrinkRecords, undoLastDrink]);

    return {drinkRecords, sum, addDrink, undoLastDrink}
}