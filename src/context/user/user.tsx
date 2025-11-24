import { User } from '@/src/domain/entities/user';
import React, { createContext, useState } from 'react';
import { UserContextType } from './types';

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    billingAddress: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      postalCode: ''
    },
    createdAt: new Date(),
    typeSpecificData: {},
    email: '',
    phoneNumber: '',
    document: '',
    fullName: '',
    birthDate: new Date()
  });

  function load(user: User): void {    
    setUser(prevState => ({
      ...prevState,
      ...user
    }))
  }

  return (
    <UserContext.Provider value={{ load, user }}>
      {children}
    </UserContext.Provider>
  );
}
