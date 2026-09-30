import { GENDERS } from "@/constants/FormConsts";

export type Genders = (typeof GENDERS)[keyof typeof GENDERS];

export interface UseForms {
  userRecords: UserRecords;
  setWeight: (weight: number) => void;
  setGender: (gender: Genders) => void;
  refetch: () => void;
  saveUserRecords: (records: UserRecords) => void;
}

export interface UserRecords {
  limit: number;
  gender: Genders;
  weight: number;
}
