import { useAuthCtx } from "@/src/context/auth/hook";
import { NumberOfMeals } from "@/src/domain/profile/enums/number-of-meals.enum";
import { User } from "@/src/domain/user/entities/user";
import { UserRepository } from "@/src/repository/user.repository";
import { StorageManager } from "@/src/utils/storage-manager/storage-manager";
import { router } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";

export function useNumberOfMealsHook() {
  const [selectedOption, setSelectedOption] = useState<NumberOfMeals | null>(null)
  const [loading, setLoading] = useState(false)

  const { defineUser, user } = useAuthCtx()

  const isTwoSelected = selectedOption === NumberOfMeals.Two
  const isThreeSelected = selectedOption === NumberOfMeals.Three
  const isFourSelected = selectedOption === NumberOfMeals.Four
  const isFivePlusSelected = selectedOption === NumberOfMeals.FivePlus
  
  const isDisabledButton = !selectedOption || loading

  function handleChangeIOption(id: NumberOfMeals) {
    setSelectedOption(id)
  }

  async function handleClickContinue(): Promise<void> {
    setLoading(true)
    
    const userRepository = new UserRepository()

    const newUser: User = { ...user }
    newUser.numberOfMeals = selectedOption

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
    
    router.push('/onboarding/exercises-frequency')
  }

  return {
    handleChangeIOption,
    isTwoSelected,
    isThreeSelected,
    isFourSelected,
    isFivePlusSelected,
    isDisabledButton,
    handleClickContinue
  }
}