// src/components/UndoButton/UndoButton.tsx
import { Pressable, Text } from "react-native";
import style from "./UndoButton.style";

type Props = {
    disabled?: boolean;
    onPress: () => void;
};

function UndoButton({ disabled = false, onPress }: Props) {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
                style.component,
                pressed && style.pressed,
                disabled && style.disabled,
            ]}
        >
            <Text style={style.text}>Cofnij</Text>
        </Pressable>
    );
}

export default UndoButton;
