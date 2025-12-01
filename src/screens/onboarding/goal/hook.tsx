import { Goal } from "@/src/domain/profile/enums/goal";
import { useState } from "react";

export function useGoalHook() {
  const [selectedOption, setSelectedOption] = useState<Goal | null>(null)

  const isAdjustDietSelected = selectedOption === Goal.AdjustDiet
  const isGainMuscleSelected = selectedOption === Goal.GainMuscle
  const isLoseWeightSelected = selectedOption === Goal.LoseWeight
  
  const isDisabledButton = !selectedOption

  function handleChangeIOption(id: Goal) {
    setSelectedOption(id)
  }

  return {
    handleChangeIOption,
    isGainMuscleSelected,
    isAdjustDietSelected,
    isLoseWeightSelected,
    isDisabledButton
  }
}