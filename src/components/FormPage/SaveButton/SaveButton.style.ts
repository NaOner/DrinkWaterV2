import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  component: {
    marginTop: 24,
  },
  activeButton: {
    height: 52,
    backgroundColor: "#3B82F6",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  unactiveButton: {
    height: 52,
    backgroundColor: "#aec7ee",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});

export default style;
