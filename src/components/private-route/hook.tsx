import { useUserCtx } from "@/src/context/user/hook";
import { UserService } from "@/src/infra/api/services/user-service";
import { router } from "expo-router";
import { useEffect, useState } from "react";

const userService = new UserService();

export function usePrivateRoute() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const { load } = useUserCtx();

  useEffect(() => {    
    (async () => {
      setIsLoading(true);

      const result = await userService.load();      
      if (result.isFailure()) {
        setIsLoading(false);

        return router.push('/auth/login', { withAnchor: false });
      }

      load(result.getValue());
      setIsAuthorized(true);

      setIsLoading(false);
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthorized) {
      return router.push('/auth/login', { withAnchor: false });
    }
  }, [isAuthorized, isLoading])

  return {
    isLoading,
    isAuthorized
  }
}