import { Goal } from "@/src/domain/profile/enums/goal.enum";
import { router } from "expo-router";
import { useState } from "react";

export function useGoalHook() {
  const [selectedOption, setSelectedOption] = useState<Goal | null>(null)

  const isAdjustDietSelected = selectedOption === Goal.AdjustDiet
  const isGainMuscleSelected = selectedOption === Goal.GainMuscle
  const isLoseWeightSelected = selectedOption === Goal.LoseWeight
  
  const isDisabledButton = !selectedOption

  function handleChangeOption(id: Goal) {
    setSelectedOption(id)
  }
  
  function handleClickContinue(): void {
    router.push('/onboarding/goal-date')
  }

  return {
    handleChangeOption,
    isGainMuscleSelected,
    isAdjustDietSelected,
    isLoseWeightSelected,
    isDisabledButton,
    handleClickContinue
  }
}