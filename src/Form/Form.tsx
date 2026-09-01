import {SafeAreaView} from "react-native-safe-area-context";
import {TextInput, Text, View} from "react-native";
import {Checkbox} from "expo-checkbox";

import style from "./Form.style";

import useForms from "@/hooks/useForms";
import {useFocusEffect} from "expo-router";
import {useCallback} from "react";

export default function Form(){

    const {limit, gender, weight, setGender, setWeight, save} = useForms()

    useFocusEffect(
        useCallback(() => {
            void save(limit)
        }, [save])
    )

    return(
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Setup</Text>

            <Text style={style.label}>Weight (kg)</Text>
            <TextInput
                style={style.input}
                value={weight}
                keyboardType="numeric"
                placeholder="e.g. 70"
                placeholderTextColor="#9CA3AF"
                onChangeText={(text) => setWeight(text.replace(/[^0-9]/g, ""))}
            />

            <Text style={style.sectionTitle}>Select gender</Text>
            <View style={[style.checkboxRow, gender === "Man" && style.checkboxRowSelected]}>
                <Checkbox
                    value={gender === "Man"}
                    color={gender === "Man" ? "#3B82F6" : undefined}
                    onValueChange={() => setGender("Man")}
                />
                <Text style={style.checkboxLabel}>Man</Text>
            </View>
            <View style={[style.checkboxRow, gender === "Female" && style.checkboxRowSelected]}>
                <Checkbox
                    value={gender === "Female"}
                    color={gender === "Female" ? "#3B82F6" : undefined}
                    onValueChange={() => setGender("Female")}
                />
                <Text style={style.checkboxLabel}>Female</Text>
            </View>

            <View style={style.resultCard}>
                <View style={style.resultRow}>
                    <Text style={style.resultLabel}>Gender</Text>
                    <Text style={style.resultValue}>{gender || "—"}</Text>
                </View>
                <View style={style.resultRow}>
                    <Text style={style.resultLabel}>Weight</Text>
                    <Text style={style.resultValue}>{weight ? `${weight} kg` : "—"}</Text>
                </View>
                <View style={style.resultRow}>
                    <Text style={style.resultLabel}>Daily limit</Text>
                    <Text style={style.limitValue}>{limit > 0 ? `${limit} ml` : "—"}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}