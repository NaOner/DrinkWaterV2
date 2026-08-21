// src/components/AddButton/AddButton.tsx
import { Pressable, Text } from "react-native";
import style from "./AddButton.style";

type Props = {
    amount: number;
    disabled?: boolean;
};

function handleAdd(){

}

function AddButton({ amount, disabled = false}: Props) {
    return (
        <Pressable
            onPress={handleAdd}
            disabled={disabled}
            style={({ pressed }) => [
                style.component,
                pressed && style.pressed,
                disabled && style.disabled,
            ]}
        >
            <Text style={style.text}>+ {amount} ml</Text>
        </Pressable>
    );
}

export default AddButton;