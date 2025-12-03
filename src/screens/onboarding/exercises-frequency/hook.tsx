import { useAuthCtx } from "@/src/context/auth/hook";
import { ExercisesFrequency } from "@/src/domain/profile/enums/exercises-frequency.enum";
import { User } from "@/src/domain/user/entities/user";
import { UserRepository } from "@/src/repository/user.repository";
import { StorageManager } from "@/src/utils/storage-manager/storage-manager";
import { router } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";

export function useExercisesFrequencyHook() {
  const [selectedOption, setSelectedOption] = useState<ExercisesFrequency | null>(null)
  const [loading, setLoading] = useState(false)

  const { defineUser, user } = useAuthCtx()

  const isFiveOrMoreTimesSelected = selectedOption === ExercisesFrequency.FiveOrMoreTimes
  const isNeverSelected = selectedOption === ExercisesFrequency.Never
  const isOneToTwoTimesPerWeekSelected = selectedOption === ExercisesFrequency.OneToTwoTimesPerWeek
  const isThreeToFourTimesPerWeekSelected = selectedOption === ExercisesFrequency.ThreeToFourTimesPerWeek
  
  const isDisabledButton = !selectedOption || loading

  function handleChangeIOption(id: ExercisesFrequency) {
    setSelectedOption(id)
  }

  async function handleClickContinue(): Promise<void> {
    setLoading(true)
    
    const userRepository = new UserRepository()

    const newUser: User = { ...user }
    newUser.exerciseFrequency = selectedOption

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