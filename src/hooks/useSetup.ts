import {useCallback, useState} from "react";

import {STORAGE_KEYS} from "@/constants/Storage";


import AsyncStorage from "@react-native-async-storage/async-storage";


export function useSetup(){
    const [isSetupCompleted, setIsSetupCompleted] = useState<boolean>(false)

    const parseJson = useCallback(() => {
        
    })

    const saveSetup = useCallback(async () => {
        try {
            const json =
            await AsyncStorage.setItem(STORAGE_KEYS.SETUP_STATE, JSON.stringify(isSetupCompleted))
        } catch(e){
            console.log("FUCK YOU")
        }
    }, [])

}