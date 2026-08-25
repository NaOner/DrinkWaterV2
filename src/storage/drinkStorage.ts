import AsyncStorage from "@react-native-async-storage/async-storage";

import { DrinkType, DrinkPreset} from "@/types/drinkTypes";
import { STORAGE_KEYS} from "@/constants/storage";
import {useCallback} from "react";

interface UseDrinkRecordsReturn {
    drinkRecords: DrinkPreset[];
    isLoading: boolean;
    error: string | null;
    addDrink: (type: DrinkType, volume: number) => void;
    undoLastDrink: () => void;
    refetch: () => void;
}

function parseDrinkRecords(json: string): DrinkPreset[] {
    return JSON.parse(json)
}

export function useDrinkRecords(){
    const fetchDrinkRecords = useCallback(async () => {
        try {
            const json = await AsyncStorage.getItem(STORAGE_KEYS.DRINK_RECORDS)
            if (!json) return []
        } catch(e){
            console.log("Error, while fetching data")
        }
    },[])

    function saveDrinkRecords(){

    }
}