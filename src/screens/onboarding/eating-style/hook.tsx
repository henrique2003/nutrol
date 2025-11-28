import { EatingStyleEnum } from "@/src/domain/profile/enums/eating-style.enum";
import { useState } from "react";

export function useEatingStyleHook() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const isTradicionalSelected = selectedOption === EatingStyleEnum.Traditional
  const isPesceratianSelected = selectedOption === EatingStyleEnum.Pesceratian
  const isVegetarianaSelected = selectedOption === EatingStyleEnum.Vegetarian
  const isVeganSelected = selectedOption === EatingStyleEnum.Vegan
  const isDisabledButton = !selectedOption

  function handleChangeIOption(id: string) {
    setSelectedOption(id)
  }

  return {
    handleChangeIOption,
    isTradicionalSelected,
    isPesceratianSelected,
    isVegetarianaSelected,
    isVeganSelected,
    isDisabledButton
  }
}