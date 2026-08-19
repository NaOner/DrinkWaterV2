import {View, Text} from "react-native";

import style from "./AddButton.style"

type Props = {
    amount: number
}

function AddButton({ amount}: Props){
    return (
        <View style={style.component}>
            <Text style={style.text}> + Dodaj {amount}ml</Text>
        </View>
    )
}

export default AddButton