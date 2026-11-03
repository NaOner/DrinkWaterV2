import { GENDERS } from "@/constants/FormConsts";

export type Genders = (typeof GENDERS)[keyof typeof GENDERS];

export interface UseForms {
  userData: UserData;
  setWeight: (weight: number) => void;
  setGender: (gender: Genders) => void;
  refetch: () => void;
  saveUserData: (records: UserData) => void;
}

export interface UserData {
  limit: number;
  gender: Genders;
  weight: number;
}
