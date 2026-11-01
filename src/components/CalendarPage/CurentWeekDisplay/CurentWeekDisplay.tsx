import { View } from "react-native";

import { styles } from "./CurentWeekDisplay.style";

import { DayBox } from "../DayBox";

const daysOfWeek = [1, 2, 3, 4, 5, 6, 7];

export default function CurentWeekDisplay() {
  return (
    <View style={styles.component}>
      {daysOfWeek.map(() => (
        <DayBox />
      ))}
    </View>
  );
}
