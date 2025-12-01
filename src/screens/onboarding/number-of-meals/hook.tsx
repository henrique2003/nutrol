import { NumberOfMeals } from "@/src/domain/profile/enums/number-of-meals.enum";
import { router } from "expo-router";
import { useState } from "react";

export function useNumberOfMealsHook() {
  const [selectedOption, setSelectedOption] = useState<NumberOfMeals | null>(null)

  const isTwoSelected = selectedOption === NumberOfMeals.Two
  const isThreeSelected = selectedOption === NumberOfMeals.Three
  const isFourSelected = selectedOption === NumberOfMeals.Four
  const isFivePlusSelected = selectedOption === NumberOfMeals.FivePlus
  
  const isDisabledButton = !selectedOption

  function handleChangeIOption(id: NumberOfMeals) {
    setSelectedOption(id)
  }

  function handleClickContinue(): void {
    router.push('/onboarding/exercises-frequency')
  }

  return {
    handleChangeIOption,
    isTwoSelected,
    isThreeSelected,
    isFourSelected,
    isFivePlusSelected,
    isDisabledButton,
    handleClickContinue
  }
}