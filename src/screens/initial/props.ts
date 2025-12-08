import { useAuthCtx } from "@/src/context/auth/hook";
import { UserRepository } from "@/src/repository/user.repository";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

const userRespository = new UserRepository();

export function useInitial() {
  const { defineUser } = useAuthCtx();

  async function handleClickLoginWithGoogle(): Promise<void> {
    const result = await userRespository.authWithGoogle();
    if (result.isFailure()) {
      return Toast.show({
        type: 'info',
        text1: 'Erro ao iniciar sessão',
        text2: result.getError(),
      })
    }

    const user = result.getValue();
    defineUser(user);

    router.push('/onboarding/eating-style');
  }

  return {
    handleClickLoginWithGoogle
  }
}