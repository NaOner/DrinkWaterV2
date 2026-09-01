import {SafeAreaView} from "react-native-safe-area-context";

import { styles } from "./History.style"

import { HistoryDisplay } from "@/components/HistoryDisplay";

import { useDrinkRecords } from "@/hooks/useDrinkRecords";
import {useFocusEffect} from "expo-router";
import {useCallback} from "react";


function History(){

    const { drinkRecords, refetch } = useDrinkRecords();

    useFocusEffect(
        useCallback(() => {
            void refetch()
        }, [refetch])
    )

    return(
        <SafeAreaView
            style={styles.container}>
            <HistoryDisplay
                records={drinkRecords}
            />
        </SafeAreaView>
    )
}

export default History