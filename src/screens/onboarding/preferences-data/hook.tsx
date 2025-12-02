import { router } from "expo-router";
import { useState } from "react";

export function usePreferencesDataHook() {
  const [preferences, setPreferences] = useState<string>('')
  const [restrictions, setRestrictions] = useState<string>('')

  function handleChangePreferences(value: string): void {
    setPreferences(value)
  }

  function handleChangeRestrictions(value: string): void {
    setRestrictions(value)
  }

  function handleClickContinue(): void {
    router.push('/onboarding/success-loading')
  }

  return {
    handleChangePreferences,
    handleClickContinue,
    handleChangeRestrictions,
    preferences,
    restrictions
  }
}