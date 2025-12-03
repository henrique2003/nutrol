import { useAuthCtx } from "@/src/context/auth/hook";
import { GoalWeight } from "@/src/domain/profile/enums/goal-weight";
import { User } from "@/src/domain/user/entities/user";
import { UserRepository } from "@/src/repository/user.repository";
import { StorageManager } from "@/src/utils/storage-manager/storage-manager";
import { router } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";

export function useGoalWeightHook() {
  const [selectedOption, setSelectedOption] = useState<GoalWeight | null>(null)
  const [loading, setLoading] = useState(false)

  const { defineUser, user } = useAuthCtx()

  const isAdjustDietSelected = selectedOption === GoalWeight.AdjustDiet
  const isGainMuscleSelected = selectedOption === GoalWeight.GainMuscle
  const isLoseWeightSelected = selectedOption === GoalWeight.LoseWeight
  
  const isDisabledButton = !selectedOption || loading

  function handleChangeOption(id: GoalWeight) {
    setSelectedOption(id)
  }
  
  async function handleClickContinue(): Promise<void> {
    setLoading(true)
    
    const userRepository = new UserRepository()

    const newUser: User = { ...user }
    newUser.goalWeight = selectedOption

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