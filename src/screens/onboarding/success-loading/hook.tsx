import { router } from "expo-router";
import { useEffect } from "react";

export function useProfileDataHook() {
  useEffect(() => {
    setTimeout(() => {
      router.push('/(tabs)')
    }, 3000)
  }, [])

  return {
  }
}