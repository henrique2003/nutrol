import { useAuthCtx } from "@/src/context/auth/hook";
import { GoalDate } from "@/src/domain/profile/enums/goal-date.enum";
import { User } from "@/src/domain/user/entities/user";
import { UserRepository } from "@/src/repository/user.repository";
import { StorageManager } from "@/src/utils/storage-manager/storage-manager";
import { router } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";

export function useGoalDateHook() {
  const [selectedOption, setSelectedOption] = useState<GoalDate | null>(null)
  const [loading, setLoading] = useState(false)

  const { defineUser, user } = useAuthCtx()

  const isOneMonthSelected = selectedOption === GoalDate.OneMonth
  const isThreeMonthsSelected = selectedOption === GoalDate.ThreeMonths
  const isSixMonthsPlusSelected = selectedOption === GoalDate.SixMonthsPlus
  const isForeverSelected = selectedOption === GoalDate.Forever
  
  const isDisabledButton = !selectedOption || loading

  function handleChangeIOption(id: GoalDate) {
    setSelectedOption(id)
  }

  async function handleClickContinue(): Promise<void> {
    setLoading(true)
    
    const userRepository = new UserRepository()

    const newUser: User = { ...user }
    newUser.goalDate = selectedOption

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