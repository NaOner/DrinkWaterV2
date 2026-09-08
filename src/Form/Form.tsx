import {SafeAreaView} from "react-native-safe-area-context";
import {TextInput, Text, View} from "react-native";
import {Checkbox} from "expo-checkbox";

import style from "./Form.style";

import { useForms } from "@/hooks/useForms";

export default function Form(){

    const {userRecords, setWeight, setGender} = useForms()

    return(
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Setup</Text>

            <Text style={style.label}>Weight (kg)</Text>
            <TextInput
                style={style.input}
                value={String(userRecords.weight)}
                keyboardType="numeric"
                placeholder="e.g. 70"
                placeholderTextColor="#9CA3AF"
                onChangeText={(text) => setWeight(Number(text.replace(/[^0-9]/g, "")))
                }
            />

            <Text style={style.sectionTitle}>Select gender</Text>
            <View style={[style.checkboxRow, userRecords.gender === "Man" && style.checkboxRowSelected]}>
                <Checkbox
                    value={userRecords.gender === "Man"}
                    color={userRecords.gender === "Man" ? "#3B82F6" : undefined}
                    onValueChange={() => setGender("Man")}
                />
                <Text style={style.checkboxLabel}>Man</Text>
            </View>
            <View style={[style.checkboxRow, userRecords?.gender === "Female" && style.checkboxRowSelected]}>
                <Checkbox
                    value={userRecords.gender === "Female"}
                    color={userRecords.gender === "Female" ? "#3B82F6" : undefined}
                    onValueChange={() => setGender("Female")}
                />
                <Text style={style.checkboxLabel}>Female</Text>
            </View>

            <View style={style.resultCard}>
                <View style={style.resultRow}>
                    <Text style={style.resultLabel}>Gender</Text>
                    <Text style={style.resultValue}>{userRecords.gender || "—"}</Text>
                </View>
                <View style={style.resultRow}>
                    <Text style={style.resultLabel}>Weight</Text>
                    <Text style={style.resultValue}>{userRecords.weight ? `${userRecords.weight} kg` : "—"}</Text>
                </View>
                <View style={style.resultRow}>
                    <Text style={style.resultLabel}>Daily limit</Text>
                    <Text style={style.limitValue}>{userRecords.limit > 0 ? `${userRecords.limit} ml` : "—"}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}