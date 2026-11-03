import { SafeAreaView } from "react-native-safe-area-context";

import style from "./Form.style";

import WeightSection from "@/components/FormPage/WeightSection/WeightSection";
import { useSetupForms } from "@/hooks/useSetupForms";

export default function Form() {
  const { userData, setWeight, setGender, saveUserData } = useSetupForms();

  return (
    <SafeAreaView style={style.container}>
      <WeightSection weight={userData.weight} setWeight={setWeight} />
    </SafeAreaView>
  );
}
