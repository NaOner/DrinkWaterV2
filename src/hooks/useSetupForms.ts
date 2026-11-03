import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

import { STORAGE_KEYS } from "@/constants/StorageKeys";
import { Genders, UseForms, UserData } from "@/types/SetupFormTypes";

export function useSetupForms(): UseForms {
  const [userData, setUserData] = useState<UserData>({
    limit: 0,
    gender: "Man",
    weight: 70,
  });

  function changeGender(gender: Genders) {
    setUserData((prev) => {
      const records = { ...prev };
      records.gender = gender;
      calculateLimit(records);
      return records;
    });
  }

  function changeWeight(weight: number) {
    setUserData((prev) => {
      const records = { ...prev };
      records.weight = weight;
      calculateLimit(records);
      return records;
    });
  }

  function calculateLimit(userData: UserData) {
    if (userData.gender === "Man" && userData.weight > 0) {
      userData.limit = userData.weight * 35;
    } else if (userData.gender === "Female" && userData.weight > 0) {
      userData.limit = userData.weight * 30;
    } else if (userData.gender === "Other" && userData.weight > 0) {
      userData.limit = userData.weight * 32.5;
    }
  }

  function parseDrinkRecords(json: string): UserData {
    return JSON.parse(json) as UserData;
  }

  // Zapisuje obiekt userData {limit, gender, weight} do async
  const saveUserData = useCallback(async (userData: UserData) => {
    console.log(userData);
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.FORM_RECORDS,
        JSON.stringify(userData),
      );
      console.log(userData);
    } catch (e) {
      console.log("Failed while saving");
    }
  }, []);

  // Łapie dane
  const fetchUserData = useCallback(async () => {
    console.log("test");
    try {
      const json = await AsyncStorage.getItem(STORAGE_KEYS.FORM_RECORDS);
      if (json === null) return [];
      console.log(json);
      setUserData(parseDrinkRecords(json));
    } catch (e) {
      console.log("Error, while fetching data");
    }
  }, []);

  //Robi fetch jak się renderuje
  useEffect(() => {
    void fetchUserData();
  }, [fetchUserData]);

  return {
    userData,
    setGender: changeGender,
    setWeight: changeWeight,
    saveUserData: saveUserData,
    refetch: fetchUserData,
  };
}
