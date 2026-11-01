import { ScrollView, Text } from "react-native";

import { DrinkHistoryElement } from "@/components/HistoryPage/DrinkHistoryElement";

import style from "./HistoryDisplay.style";
import { DrinkRecord } from "@/types/drinkTypes";

interface Props {
  records: DrinkRecord[];
}

function HistoryDisplay({ records }: Props) {
  if (records.length === 0) {
    return <Text style={style.empty}>Brak wpisów</Text>;
  }

  return (
    <ScrollView contentContainerStyle={style.list}>
      {records.map((record) => (
        <DrinkHistoryElement key={record.id} record={record} />
      ))}
    </ScrollView>
  );
}

export default HistoryDisplay;
