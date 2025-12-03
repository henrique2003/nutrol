import { useAuthCtx } from "@/src/context/auth/hook";
import { EatingStyle } from "@/src/domain/profile/enums/eating-style.enum";
import { User } from "@/src/domain/user/entities/user";
import { UserRepository } from "@/src/repository/user.repository";
import { StorageManager } from "@/src/utils/storage-manager/storage-manager";
import { router } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";

export function useEatingStyleHook() {
  const [selectedOption, setSelectedOption] = useState<EatingStyle | null>(null)
  const [loading, setLoading] = useState(false)

  const { defineUser, user } = useAuthCtx()

  const isTradicionalSelected = selectedOption === EatingStyle.Traditional
  const isPesceratianSelected = selectedOption === EatingStyle.Pesceratian
  const isVegetarianaSelected = selectedOption === EatingStyle.Vegetarian
  const isVeganSelected = selectedOption === EatingStyle.Vegan

  const isDisabledButton = !selectedOption || loading

  function handleChangeOption(id: EatingStyle) {
    setSelectedOption(id)
  }

  async function handleClickContinue(): Promise<void> {
    setLoading(true)
    const userRepository = new UserRepository()

    const newUser: User = { ...user }
    newUser.eatingStyle = selectedOption

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
    router.push('/onboarding/goal-weight')
  }

  return {
    handleChangeOption,
    isTradicionalSelected,
    isPesceratianSelected,
    isVegetarianaSelected,
    isVeganSelected,
    isDisabledButton,
    handleClickContinue
  }
}