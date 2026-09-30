import {View, Text} from "react-native";

import style from "./Counter.style"

type Props = {
    current: number
    goal: number
}

function Counter({ current, goal }: Props){
    return (
        <View style={style.component}>
            <Text style={style.text}>{current} / {goal} ml</Text>
        </View>
    )
}

export default Counter
