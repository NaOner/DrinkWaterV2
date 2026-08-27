import { Pressable, Text } from "react-native";
import style from "./UndoButton.style";

interface Props {
    onUndo: () => void
}

function UndoButton({ onUndo }: Props) {

    return (
        <Pressable
            onPress={() => onUndo()}
            style={({ pressed }) =>
                [
                    style.component,
                    pressed && style.pressed,
                ]}>
            <Text style={style.text}>Cofnij</Text>
        </Pressable>
    );
}

export default UndoButton;
