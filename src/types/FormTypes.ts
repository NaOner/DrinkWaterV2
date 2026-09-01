import { GENDERS } from "@/constants/FormConsts";

export type Genders = (typeof GENDERS)[keyof typeof GENDERS]
