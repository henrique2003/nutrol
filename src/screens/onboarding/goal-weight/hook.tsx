import { GoalWeight } from "@/src/domain/profile/enums/goal-weight";
import { router } from "expo-router";
import { useState } from "react";

export function useGoalWeightHook() {
  const [selectedOption, setSelectedOption] = useState<GoalWeight | null>(null)

  const isAdjustDietSelected = selectedOption === GoalWeight.AdjustDiet
  const isGainMuscleSelected = selectedOption === GoalWeight.GainMuscle
  const isLoseWeightSelected = selectedOption === GoalWeight.LoseWeight
  
  const isDisabledButton = !selectedOption

  function handleChangeOption(id: GoalWeight) {
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