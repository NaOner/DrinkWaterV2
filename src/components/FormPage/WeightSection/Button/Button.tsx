import { Pressable, Text } from "react-native";

import style from "./Button.style";

interface Props {
  text: string;
  onPress: () => void;
}

export default function Button({ text, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [style.component, pressed && style.pressed]}
    >
      <Text style={style.text}>{text}</Text>
    </Pressable>
  );
}
