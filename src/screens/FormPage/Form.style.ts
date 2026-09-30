import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#F0F4FF",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#1E3A5F",
        marginBottom: 24,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#6B7280",
        marginBottom: 6,
        textTransform: "uppercase",
        letterSpacing: 0.5,
    },
    input: {
        height: 52,
        borderWidth: 1.5,
        borderColor: "#D1D5DB",
        borderRadius: 14,
        paddingHorizontal: 16,
        backgroundColor: "#FFFFFF",
        fontSize: 17,
        color: "#111827",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#374151",
        marginBottom: 12,
    },
    checkboxSection: {
        marginTop: 28,
    },
    resultCard: {
        marginTop: 32,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },
    resultRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
    },
    resultLabel: {
        fontSize: 15,
        color: "#6B7280",
    },
    resultValue: {
        fontSize: 15,
        fontWeight: "600",
        color: "#111827",
    },
    limitValue: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#3B82F6",
    },
});

export default style;
