import { View } from "react-native";
import Button from "./Button/Button";
import DisplayWeight from "./DisplayWeight/DisplayWeight";

import { style } from "./WeightSection.style";

interface Props {
  weight: number;
  setWeight: (weight: number) => void;
}

export default function WeightSection({ weight, setWeight }: Props) {
  function add() {
    setWeight(weight + 1);
  }

  function sub() {
    setWeight(weight - 1);
  }
  return (
    <View style={style.Component}>
      <Button text={"-"} onPress={sub} />
      <DisplayWeight weight={weight} />
      <Button text={"+"} onPress={add} />
    </View>
  );
}
