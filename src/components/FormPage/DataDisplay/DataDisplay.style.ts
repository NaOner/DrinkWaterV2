import { StyleSheet } from "react-native";

const style = StyleSheet.create({
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
