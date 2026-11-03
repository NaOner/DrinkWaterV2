import { Text, TouchableOpacity, View } from "react-native";

import { UserData } from "@/types/SetupFormTypes";
import style from "./SaveButton.style";

interface Props {
  userData: UserData;
  save: () => void;
}

export default function SaveButton({ userData, save }: Props) {
  const canSave = () => {
    if (
      userData.gender != "" &&
      userData.weight != 0 &&
      userData.limit != 0
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
          if (userData.gender && userData.weight) {
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
