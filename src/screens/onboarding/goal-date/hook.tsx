import { GoalDate } from "@/src/domain/profile/enums/goal-date.enum";
import { router } from "expo-router";
import { useState } from "react";

export function useGoalDateHook() {
  const [selectedOption, setSelectedOption] = useState<GoalDate | null>(null)

  const isOneMonthSelected = selectedOption === GoalDate.OneMonth
  const isThreeMonthsSelected = selectedOption === GoalDate.ThreeMonths
  const isSixMonthsPlusSelected = selectedOption === GoalDate.SixMonthsPlus
  const isForeverSelected = selectedOption === GoalDate.Forever
  
  const isDisabledButton = !selectedOption

  function handleChangeIOption(id: GoalDate) {
    setSelectedOption(id)
  }

  function handleClickContinue(): void {
    router.push('/onboarding/number-of-meals')
  }

  return {
    handleChangeIOption,
    isOneMonthSelected,
    isThreeMonthsSelected,
    isSixMonthsPlusSelected,
    isForeverSelected,
    isDisabledButton,
    handleClickContinue
  }
}