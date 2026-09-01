import AsyncStorage from "@react-native-async-storage/async-storage";
import {useCallback, useEffect, useState} from "react";
import { Genders } from "@/types/FormTypes";
import {STORAGE_KEYS} from "@/constants/Storage";


interface useForms {
    limit: number,
    gender: Genders,
    weight: string,
    setGender: () => void,
    setWeight: () => void,
    refetch: ()=>void,
    save: ()=>void,
}

export default function useForms(){
    const [gender, setGender] = useState<Genders>("")
    const [limit, setLimit] = useState<number>(0)
    const [weight, setWeight] = useState("")

    function parseDrinkRecords(json: string): number {
        return JSON.parse(json) as number
    }


    const saveFormRecords = useCallback(async (limit: number) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.FORM_RECORDS, JSON.stringify(limit))
        } catch(e) {
            console.log("Failed while saving")
        }
    }, [weight, gender])

    const fetchFormRecords = useCallback(async () => {
        try {
            const json = await AsyncStorage.getItem(STORAGE_KEYS.FORM_RECORDS)
            if (json === null) return []
            setLimit(parseDrinkRecords(json))
        } catch(e){
            console.log("Error, while fetching data")
        }
    },[])

    useEffect(() => {
        void fetchFormRecords()
    }, [fetchFormRecords]);



        useEffect(() => {
            const numWeight = Number(weight)
            let draftLimit = 0
            if (!weight && !gender) return

            if(gender === "Man" && numWeight > 0){
                draftLimit = numWeight * 35
            } else if ((gender === "Female" || gender === "Other") && numWeight > 0) {
                draftLimit = numWeight * 31
            }

            setLimit(draftLimit)
            void saveFormRecords(draftLimit)
        }, [weight, gender ])


    return {limit, gender, weight, setGender, setWeight, refetch: fetchFormRecords, save: saveFormRecords}
}

export function useLimit() {
    const [limit, setLimit] = useState(0)

    const fetchLimit = useCallback(async () => {
        const json = await
            AsyncStorage.getItem(STORAGE_KEYS.FORM_RECORDS)
        if (json) setLimit(JSON.parse(json) as number)
    }, [])

    useEffect(() => { void fetchLimit() }, [fetchLimit])

    return { limit, refetch: fetchLimit }
}
