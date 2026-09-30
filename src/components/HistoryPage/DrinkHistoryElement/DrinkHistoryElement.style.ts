import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    component: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        padding: 12,
        borderRadius: 12,
        backgroundColor: "#E5E7EB",
    },
    image: {
        width: 36,
        height: 36,
    },
    texts: {
        flex: 1,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
    },
    time: {
        fontSize: 12,
        color: "#6B7280",
        marginTop: 2,
    },
});

export default style;
