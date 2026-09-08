import AsyncStorage from "@react-native-async-storage/async-storage";
import {useCallback, useEffect, useState} from "react";

import { Genders, UserRecords, UseForms } from "@/types/FormTypes";
import { STORAGE_KEYS } from "@/constants/Storage";

export function useForms(): UseForms{
    const [userRecords, setUserRecords] = useState<UserRecords>({
        limit: 0,
        gender: "Man",
        weight: 0,
    })

    function changeGender(gender: Genders){
        setUserRecords( (prev) => {
            const records = {...prev}
            records.gender = gender
            return records
        })
        calculateLimit(userRecords.weight, gender)
    }

    function changeWeight(weight: number){
        setUserRecords( (prev) => {
            const records = {...prev}
            records.weight = weight
            return records
        })
        calculateLimit(weight, userRecords.gender)
    }

    function changeLimit(limit: number){
        setUserRecords( (prev) => {
            const records = {...prev}
            records.limit = limit
            void saveUserRecords(records)
            return records
        })
    }

    function calculateLimit(weight: number, gender: Genders){
        let limit = 0
        if(gender === "Man" && weight > 0){
            limit = weight * 35
        } else if (gender === "Female" && weight > 0){
            limit = weight * 30
        } else if (gender === "Other" && weight > 0){
            limit = weight * 32.5
        }
        changeLimit(limit)
    }

    function parseDrinkRecords(json: string): UserRecords {
        return JSON.parse(json) as UserRecords
    }

    // Zapisuje obiekt userRecords {limit, gender, weight} do async
    const saveUserRecords = useCallback(async (userRecords: UserRecords) => {
        console.log(userRecords)
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.FORM_RECORDS, JSON.stringify(userRecords))
        } catch(e) {
            console.log("Failed while saving")
        }
    }, [userRecords])

    // Łapie dane
    const fetchUserRecords = useCallback(async () => {
        try {
            const json = await AsyncStorage.getItem(STORAGE_KEYS.FORM_RECORDS)
            if (json === null) return []
            setUserRecords(parseDrinkRecords(json))
        } catch(e){
            console.log("Error, while fetching data")
        }
    },[])

    //Robi fetch jak się renderuje
    useEffect(() => {
        void fetchUserRecords()
    }, [fetchUserRecords]);


    return {userRecords, setGender: changeGender, setWeight: changeWeight, refetch: fetchUserRecords}
}
