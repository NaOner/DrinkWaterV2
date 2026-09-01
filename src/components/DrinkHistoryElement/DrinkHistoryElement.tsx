import { Text, View } from "react-native";
import { Image } from "expo-image";

import {DrinkRecordWithDate} from "@/types/drinkTypes";
import { DRINK_IMAGES } from "@/constants/drinkConsts";

import style from "./DrinkHistoryElement.style";

interface Props {
    record: DrinkRecordWithDate;
}

function DrinkHistoryElement({ record }: Props) {

    function formatDate(date: number): string {
        const d = new Date(date)
        const h = String(d.getHours()).padStart(2, "0");
        const m = String(d.getMinutes()).padStart(2, "0");
        return `${h}:${m}`;
    }

    return (
        <View style={style.component}>
            <Image source={DRINK_IMAGES[record.type]} style={style.image} />
            <View style={style.texts}>
                <Text style={style.title}>
                    {record.type} · {record.volume} ml
                </Text>
                <Text style={style.time}>{formatDate(record.date)}</Text>
            </View>
        </View>
    );
}

export default DrinkHistoryElement;
