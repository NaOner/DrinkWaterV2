import { View, Text } from "react-native";

import style from "./DisplayWeight.style";

interface Props {
  weight: number;
}

export default function DisplayWeight({ weight }: Props) {
  return (
    <View style={style.component}>
      <Text style={style.text}>{weight}</Text>
    </View>
  );
}
