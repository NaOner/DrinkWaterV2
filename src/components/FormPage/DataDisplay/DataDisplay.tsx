import { Text, View } from "react-native";

import { UserData } from "@/types/SetupFormTypes";
import style from "./DataDisplay.style";

interface Props {
  userData: UserData;
}

export default function DataDisplay({ userData }: Props) {
  return (
    <View style={style.resultCard}>
      <View style={style.resultRow}>
        <Text style={style.resultLabel}>Gender</Text>
        <Text style={style.resultValue}>{userData.gender || "—"}</Text>
      </View>
      <View style={style.resultRow}>
        <Text style={style.resultLabel}>Weight</Text>
        <Text style={style.resultValue}>
          {userData.weight ? `${userData.weight} kg` : "—"}
        </Text>
      </View>
      <View style={style.resultRow}>
        <Text style={style.resultLabel}>Daily limit</Text>
        <Text style={style.limitValue}>
          {userData.limit > 0 ? `${userData.limit} ml` : "—"}
        </Text>
      </View>
    </View>
  );
}
