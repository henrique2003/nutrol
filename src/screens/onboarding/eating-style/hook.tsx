import { EatingStyle } from "@/src/domain/profile/enums/eating-style.enum";
import { router } from "expo-router";
import { useState } from "react";

export function useEatingStyleHook() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const isTradicionalSelected = selectedOption === EatingStyle.Traditional
  const isPesceratianSelected = selectedOption === EatingStyle.Pesceratian
  const isVegetarianaSelected = selectedOption === EatingStyle.Vegetarian
  const isVeganSelected = selectedOption === EatingStyle.Vegan

  const isDisabledButton = !selectedOption

  function handleChangeIOption(id: string) {
    setSelectedOption(id)
  }

  function handleClickContinue(): void {
    router.push('/onboarding/goal')
  }

  return {
    handleChangeIOption,
    isTradicionalSelected,
    isPesceratianSelected,
    isVegetarianaSelected,
    isVeganSelected,
    isDisabledButton,
    handleClickContinue
  }
}