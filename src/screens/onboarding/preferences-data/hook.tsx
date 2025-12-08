import { useAuthCtx } from "@/src/context/auth/hook";
import { User } from "@/src/domain/user/entities/user";
import { UserRepository } from "@/src/repository/user.repository";
import { StorageManager } from "@/src/utils/storage-manager/storage-manager";
import { router } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";

export function usePreferencesDataHook() {
  const [preferences, setPreferences] = useState<string>('')
  const [restrictions, setRestrictions] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const { defineUser, user } = useAuthCtx()
  
  const isDisabledButton = loading

  function handleChangePreferences(value: string): void {
    setPreferences(value)
  }

  function handleChangeRestrictions(value: string): void {
    setRestrictions(value)
  }

  async function handleClickContinue(): Promise<void> {
    setLoading(true)
    
    const userRepository = new UserRepository()

    const newUser: User = { ...user }
    if (preferences) {
      newUser.preferences = preferences
    }
    if (restrictions) {
      newUser.restrictions = restrictions
    }

    const result = await userRepository.update(newUser)
    if (result.isFailure()) {
      setLoading(false)

      return Toast.show({
        type: 'info',
        text1: 'Erro ao cadastrar estilo de alimentação'
      })
    }

    defineUser(result.getValue())

    const resultStorage = await StorageManager.setItem<User>('user', newUser)
    if (resultStorage.isFailure()) {
      setLoading(false)

      return Toast.show({
        type: 'info',
        text1: 'Erro ao atualizar usuário na sessão'
      })
    }

    setLoading(false)

    router.push('/onboarding/success-loading')
  }

  return {
    handleChangePreferences,
    handleClickContinue,
    handleChangeRestrictions,
    preferences,
    restrictions,
    isDisabledButton
  }
}