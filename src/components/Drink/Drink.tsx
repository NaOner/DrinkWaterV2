import { View, Text} from "react-native";


type Props = {
    image: string,
    amount: number,
    type: string,
}

function Drink({image = "", amount = 0, type = ""}: Props){
    return(
        <View>
            <image href={image}/>
            <Text>
                {amount} ml
                {type}
            </Text>
        </View>
    )
}

export default Drink