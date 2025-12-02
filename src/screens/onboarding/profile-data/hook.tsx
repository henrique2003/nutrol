import { Masker } from "@/src/utils/masker/masker";
import { router } from "expo-router";
import { useState } from "react";

export function useProfileDataHook() {
  const [age, setAge] = useState<string>('')
  const [height, setHeight] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  
  const isDisabledButton = !age || !height || !weight

  function handleChangeAge(age: string): void {
    setAge(Masker.number(age))
  }

  function handleChangeHeight(value: string): void {
    setHeight(value)
  }

  function handleChangeWeight(value: string): void {
    setWeight(value)
  }

  function handleClickContinue(): void {
    router.push('/onboarding/preferences-data')
  }

  return {
    handleChangeAge,
    isDisabledButton,
    handleClickContinue,
    handleChangeHeight,
    handleChangeWeight,
    age,
    height,
    weight
  }
}