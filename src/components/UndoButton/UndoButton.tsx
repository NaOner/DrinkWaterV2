// src/components/UndoButton/UndoButton.tsx
import { Pressable, Text } from "react-native";
import style from "./UndoButton.style";


interface Props  {
};

function UndoButton() {

    function handleUndo(){

    }

    return (
        <Pressable
            onPress={handleUndo}
            style={({ pressed }) => [
                style.component,
                pressed && style.pressed,
            ]}
        >
            <Text style={style.text}>Cofnij</Text>
        </Pressable>
    );
}

export default UndoButton;
