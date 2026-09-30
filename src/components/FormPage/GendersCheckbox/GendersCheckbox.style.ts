import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  rowSelected: {
    backgroundColor: "#EFF6FF",
    borderColor: "#3B82F6",
  },
  label: {
    fontSize: 16,
    color: "#1F2937",
  },
  labelSelected: {
    fontWeight: "600",
    color: "#1E3A5F",
  },
});

export default style;
