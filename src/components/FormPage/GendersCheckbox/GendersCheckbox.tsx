// Native/expo components
import { Checkbox } from "expo-checkbox";
import { Text, TouchableOpacity, View } from "react-native";
// Consts
import { GENDERS } from "@/constants/FormConsts";
// Types
import { UserRecords } from "@/types/SetupFormTypes";
// Styles
import style from "./GendersCheckbox.style";

export type Genders = (typeof GENDERS)[keyof typeof GENDERS];

interface Props {
  userRecords: UserRecords;
  gender: Genders;
  setter: (gender: Genders) => void;
}

export default function GendersCheckbox({
  userRecords,
  gender,
  setter,
}: Props) {
  const isSelected = userRecords.gender === gender;

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
