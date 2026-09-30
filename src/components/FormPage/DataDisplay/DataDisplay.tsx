import { Text, View } from "react-native";

import { UserRecords } from "@/types/SetupFormTypes";
import style from "./DataDisplay.style";

interface Props {
  userRecords: UserRecords;
}

export default function DataDisplay({ userRecords }: Props) {
  return (
    <View style={style.resultCard}>
      <View style={style.resultRow}>
        <Text style={style.resultLabel}>Gender</Text>
        <Text style={style.resultValue}>{userRecords.gender || "—"}</Text>
      </View>
      <View style={style.resultRow}>
        <Text style={style.resultLabel}>Weight</Text>
        <Text style={style.resultValue}>
          {userRecords.weight ? `${userRecords.weight} kg` : "—"}
        </Text>
      </View>
      <View style={style.resultRow}>
        <Text style={style.resultLabel}>Daily limit</Text>
        <Text style={style.limitValue}>
          {userRecords.limit > 0 ? `${userRecords.limit} ml` : "—"}
        </Text>
      </View>
    </View>
  );
}
