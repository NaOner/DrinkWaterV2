// Native/expo components
import { Checkbox } from "expo-checkbox";
import { Text, TouchableOpacity, View } from "react-native";
// Consts
import { GENDERS } from "@/constants/FormConsts";
// Types
import { UserData } from "@/types/SetupFormTypes";
// Styles
import style from "./GendersCheckbox.style";

export type Genders = (typeof GENDERS)[keyof typeof GENDERS];

interface Props {
  userData: UserData;
  gender: Genders;
  setter: (gender: Genders) => void;
}

export default function GendersCheckbox({
  userData,
  gender,
  setter,
}: Props) {
  const isSelected = userData.gender === gender;

  return (
    <TouchableOpacity onPress={() => setter(gender)} activeOpacity={1}>
      <View style={[style.row, isSelected && style.rowSelected]}>
        <Checkbox
          value={isSelected}
          color={isSelected ? "#3B82F6" : undefined}
          onValueChange={() => setter(gender)}
        />
        <Text style={[style.label, isSelected && style.labelSelected]}>
          {gender}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
