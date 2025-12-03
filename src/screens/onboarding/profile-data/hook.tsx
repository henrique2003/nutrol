import { useAuthCtx } from "@/src/context/auth/hook";
import { User } from "@/src/domain/user/entities/user";
import { UserRepository } from "@/src/repository/user.repository";
import { Masker } from "@/src/utils/masker/masker";
import { StorageManager } from "@/src/utils/storage-manager/storage-manager";
import { router } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";

export function useProfileDataHook() {
  const [age, setAge] = useState<string>('')
  const [height, setHeight] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const { defineUser, user } = useAuthCtx()
  
  const isDisabledButton = !age || !height || !weight || loading

  function handleChangeAge(age: string): void {
    setAge(Masker.number(age))
  }

  function handleChangeHeight(value: string): void {
    setHeight(value)
  }

  function handleChangeWeight(value: string): void {
    setWeight(value)
  }

  async function handleClickContinue(): Promise<void> {
    setLoading(true)
    
    const userRepository = new UserRepository()

    const newUser: User = { ...user }
    newUser.age = parseFloat(age)
    newUser.height = parseFloat(height)
    newUser.weight = parseFloat(weight)

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

    router.push('/onboarding/preferences-data')
  }

  return {
    handleChangeAge,
    isDisabledButton,
    handleClickContinue,
    handleChangeHeight,
    handleChangeWeight,
    age,
    height,
    weight
  }
}