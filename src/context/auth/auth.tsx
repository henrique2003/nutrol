import { User } from '@/src/domain/user/entities/user';
import { StorageManager } from '@/src/utils/storage-manager/storage-manager';
import { router } from 'expo-router';
import React, { createContext, useEffect, useState } from 'react';
import { AuthContextType } from './types';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    id: '',
    email: '',
    name: '',
    password: '',
    age: undefined,
    eatingStyle: undefined,
    exerciseFrequency: undefined,
    goalDate: undefined,
    goalWeight: undefined,
    height: undefined,
    numberOfMeals: undefined,
    preferences: undefined,
    restrictions: undefined,
    weight: undefined
  });

  function defineUser(user: User): void {
    setUser(prevState => ({
      ...prevState,
      ...user
    }))
  }

  useEffect(() => {
    (async () => {
      // await StorageManager.clear()

      const result = await StorageManager.getItem<User>('user')      
      if (!result || !result.getValue()) {
        return router.push('/')
      }

      setUser(result.getValue()!)
    })()
  }, [])

  return (
    <AuthContext.Provider value={{ defineUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}
