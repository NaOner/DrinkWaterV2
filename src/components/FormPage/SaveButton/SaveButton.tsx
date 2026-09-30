import { Text, TouchableOpacity, View } from "react-native";

import { UserRecords } from "@/types/SetupFormTypes";
import style from "./SaveButton.style";

interface Props {
  userRecords: UserRecords;
  save: () => void;
}

export default function SaveButton({ userRecords, save }: Props) {
  const canSave = () => {
    if (
      userRecords.gender != "" &&
      userRecords.weight != 0 &&
      userRecords.limit != 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <View style={style.component}>
      <TouchableOpacity
        style={canSave() ? style.activeButton : style.unactiveButton}
        onPress={() => {
          if (userRecords.gender && userRecords.weight) {
            save();
            console.log("Saved");
          } else {
            console.log("cant save");
          }
        }}
      >
        <Text style={style.text}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
}
