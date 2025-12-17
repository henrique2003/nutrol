import { useAuthCtx } from "@/src/context/auth/hook";
import { User } from "@/src/domain/user/entities/user";
import { UserRepository } from "@/src/repository/user.repository";
import { StorageManager } from "@/src/utils/storage-manager/storage-manager";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

const userRespository = new UserRepository();

export function useInitial() {
  const { defineUser } = useAuthCtx();

  async function handleClickLogin(provider: 'google' | 'apple'): Promise<void> {
    const resultAuthUser = await userRespository.authWithGoogle(provider);
    if (resultAuthUser.isFailure()) {
      return Toast.show({
        type: 'info',
        text1: 'Erro ao iniciar sessão',
        text2: resultAuthUser.getError(),
      });
    }

    const user = resultAuthUser.getValue();    
    
    const resultStorageManager = await StorageManager.setItem<User>('user', user);
    if (resultStorageManager.isFailure()) {
      return Toast.show({
        type: 'info',
        text1: 'Erro ao salvar sessão',
        text2: resultStorageManager.getError(),
      });
    }

    defineUser(user);

    if (!user.eatingStyle) {
      return router.push('/onboarding/eating-style')
    } else if (!user.goalWeight) {
      return router.push('/onboarding/goal-weight')
    } else if (!user.goalDate) {
      return router.push('/onboarding/goal-date')
    } else if (!user.goalDate) {
      return router.push('/onboarding/goal-date')
    } else if (!user.numberOfMeals) {
      return router.push('/onboarding/number-of-meals')
    } else if (!user.exerciseFrequency) {
      return router.push('/onboarding/exercises-frequency')
    } else if (!user.age || !user.weight || !user.height) {
      return router.push('/onboarding/profile-data')
    } else {
      return router.push('/(tabs)')
    }
  }

  return {
    handleClickLogin
  }
}