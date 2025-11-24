import { useContext } from "react";
import { UserContext } from "./user";

export function useUserCtx() {
  const context = useContext(UserContext);

  if (!context)  {
    throw new Error('useUser must be used within TabBarProvider');
  }

  return context;
}