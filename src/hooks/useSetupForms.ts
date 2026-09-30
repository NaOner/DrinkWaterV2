import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

import { STORAGE_KEYS } from "@/constants/StorageKeys";
import { Genders, UseForms, UserRecords } from "@/types/SetupFormTypes";

export function useSetupForms(): UseForms {
  const [userRecords, setUserRecords] = useState<UserRecords>({
    limit: 0,
    gender: "Man",
    weight: 0,
  });

  function changeGender(gender: Genders) {
    setUserRecords((prev) => {
      const records = { ...prev };
      records.gender = gender;
      calculateLimit(records);
      return records;
    });
  }

  function changeWeight(weight: number) {
    setUserRecords((prev) => {
      const records = { ...prev };
      records.weight = weight;
      calculateLimit(records);
      return records;
    });
  }

  function calculateLimit(userRecords: UserRecords) {
    if (userRecords.gender === "Man" && userRecords.weight > 0) {
      userRecords.limit = userRecords.weight * 35;
    } else if (userRecords.gender === "Female" && userRecords.weight > 0) {
      userRecords.limit = userRecords.weight * 30;
    } else if (userRecords.gender === "Other" && userRecords.weight > 0) {
      userRecords.limit = userRecords.weight * 32.5;
    }
  }

  function parseDrinkRecords(json: string): UserRecords {
    return JSON.parse(json) as UserRecords;
  }

  // Zapisuje obiekt userRecords {limit, gender, weight} do async
  const saveUserRecords = useCallback(async (userRecords: UserRecords) => {
    console.log(userRecords);
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.FORM_RECORDS,
        JSON.stringify(userRecords),
      );
      console.log(userRecords);
    } catch (e) {
      console.log("Failed while saving");
    }
  }, []);

  // Łapie dane
  const fetchUserRecords = useCallback(async () => {
    console.log("test");
    try {
      const json = await AsyncStorage.getItem(STORAGE_KEYS.FORM_RECORDS);
      if (json === null) return [];
      console.log(json);
      setUserRecords(parseDrinkRecords(json));
    } catch (e) {
      console.log("Error, while fetching data");
    }
  }, []);

  //Robi fetch jak się renderuje
  useEffect(() => {
    void fetchUserRecords();
  }, [fetchUserRecords]);

  return {
    userRecords,
    setGender: changeGender,
    setWeight: changeWeight,
    saveUserRecords: saveUserRecords,
    refetch: fetchUserRecords,
  };
}
