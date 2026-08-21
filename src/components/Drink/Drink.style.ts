// src/components/DrinkTypes/DrinkTypes.style.ts
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    component: {
        flex: 1,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
        borderWidth: 2,
        borderColor: "#E5E7EB",
        backgroundColor: "#E5E7EB",
    },
    selected: {
        borderColor: "rgb(55 139 250 / 0.83)",
        backgroundColor: "rgb(178 220 251 / 0.83)",
    },
    pressed: {
        transform: [{ scale: 0.93 }],
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
    },
});

export default style;