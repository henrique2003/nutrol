import { useAuthCtx } from "@/src/context/auth/hook";
import { User } from "@/src/domain/user/entities/user";
import { UserRepository } from "@/src/repository/user.repository";
import { StorageManager } from "@/src/utils/storage-manager/storage-manager";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

const userRepository = new UserRepository();

export function usePrivateRoute() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const { defineUser } = useAuthCtx();

  useEffect(() => {    
    (async () => {
      setIsLoading(true);

      const result = await userRepository.load();      
      if (result.isFailure()) {
        setIsLoading(false);

        return router.push('/', { withAnchor: false });
      }

      defineUser(result.getValue());
      const resultStorageManager = await StorageManager.setItem<User>('user', result.getValue());
      if (resultStorageManager.isFailure()) {
        setIsLoading(false);

        return Toast.show({
          type: 'info',
          text1: 'Erro ao carregar sessão',
          text2: resultStorageManager.getError(),
        });
      }

      setIsAuthorized(true);
      setIsLoading(false);
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthorized) {
      return router.push('/', { withAnchor: false });
    }
  }, [isAuthorized, isLoading])

  return {
    isLoading,
    isAuthorized
  }
}