// src/components/AddButton/AddButton.style.ts
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    component: {
        backgroundColor: "rgb(55 139 250 / 0.83)",
        borderRadius: 20,
        paddingVertical: 20,
        marginHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    pressed: {
        backgroundColor: "rgb(9 88 186 / 0.83)",   // ciemniejszy odcień
        transform: [{ scale: 0.97 }],
    },
    disabled: {
        backgroundColor: "#CBD5E1",   // szary — „nie ma czego dodać"
    },
    text: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "bold",
    },
});

export default style;