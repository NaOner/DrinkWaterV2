import { ScrollView, Text } from "react-native";

import { DrinkHistoryElement } from "@/components/DrinkHistoryElement";

import style from "./HistoryDisplay.style";
import { DrinkRecordWithDate} from "@/types/drinkTypes";

interface Props {
    records: DrinkRecordWithDate[]
}

function HistoryDisplay({records}: Props) {
    if (records.length === 0) {
        return <Text style={style.empty}>Brak wpisów</Text>;
    }

    return (
        <ScrollView contentContainerStyle={style.list}>
            {records.map((record) => (
                <DrinkHistoryElement
                    key={record.id}
                    record={record} />
            ))}
        </ScrollView>
    );
}

export default HistoryDisplay;
