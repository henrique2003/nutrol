import { useContext } from "react";
import { AuthContext } from "./auth";

export function useAuthCtx() {
  const context = useContext(AuthContext);

  if (!context)  {
    throw new Error('useAuthCtx must be used within TabBarProvider');
  }

  return context;
}