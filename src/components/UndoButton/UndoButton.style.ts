// src/components/UndoButton/UndoButton.style.ts
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    component: {
        backgroundColor: "#F1F5F9",
        borderRadius: 20,
        paddingVertical: 20,
        marginHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    pressed: {
        backgroundColor: "#CBD5E1",
        transform: [{ scale: 0.97 }],
    },
    disabled: {
        backgroundColor: "#F8FAFC",
    },
    text: {
        color: "#64748B",
        fontSize: 22,
        fontWeight: "bold",
    },
});

export default style;
