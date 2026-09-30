import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import style from "./Form.style";

import { DataDisplay } from "@/components/FormPage/DataDisplay";
import { GendersCheckbox } from "@/components/FormPage/GendersCheckbox";
import { SaveButton } from "@/components/FormPage/SaveButton";

import { useSetupForms } from "@/hooks/useSetupForms";

export default function Form() {
  const { userRecords, setWeight, setGender, saveUserRecords } =
    useSetupForms();

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>Setup</Text>

      <Text style={style.label}>Weight (kg)</Text>
      <TextInput
        style={style.input}
        value={String(userRecords.weight)}
        keyboardType="numeric"
        placeholder="e.g. 70"
        placeholderTextColor="#9CA3AF"
        onChangeText={(text) => setWeight(Number(text.replace(/[^0-9]/g, "")))}
      />

      <View style={style.checkboxSection}>
        <Text style={style.sectionTitle}>Select gender</Text>
        <GendersCheckbox
          userRecords={userRecords}
          setter={(gender) => setGender(gender)}
          gender="Man"
        />
        <GendersCheckbox
          userRecords={userRecords}
          setter={(gender) => setGender(gender)}
          gender="Female"
        />
      </View>
      <DataDisplay userRecords={userRecords} />
      <SaveButton
        userRecords={userRecords}
        save={() => saveUserRecords(userRecords)}
      />
    </SafeAreaView>
  );
}
