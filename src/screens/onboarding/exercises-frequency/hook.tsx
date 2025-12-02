import { ExercisesFrequency } from "@/src/domain/profile/enums/exercises-frequency.enum";
import { router } from "expo-router";
import { useState } from "react";

export function useExercisesFrequencyHook() {
  const [selectedOption, setSelectedOption] = useState<ExercisesFrequency | null>(null)

  const isFiveOrMoreTimesSelected = selectedOption === ExercisesFrequency.FiveOrMoreTimes
  const isNeverSelected = selectedOption === ExercisesFrequency.Never
  const isOneToTwoTimesPerWeekSelected = selectedOption === ExercisesFrequency.OneToTwoTimesPerWeek
  const isThreeToFourTimesPerWeekSelected = selectedOption === ExercisesFrequency.ThreeToFourTimesPerWeek
  
  const isDisabledButton = !selectedOption

  function handleChangeIOption(id: ExercisesFrequency) {
    setSelectedOption(id)
  }

  function handleClickContinue(): void {
    router.push('/onboarding/profile-data')
  }

  return {
    handleChangeIOption,
    isDisabledButton,
    handleClickContinue,
    isFiveOrMoreTimesSelected,
    isNeverSelected,
    isOneToTwoTimesPerWeekSelected,
    isThreeToFourTimesPerWeekSelected
  }
}