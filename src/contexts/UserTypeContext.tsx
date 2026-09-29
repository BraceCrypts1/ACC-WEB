import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserType = 'provider' | 'employer' | 'resident';

interface UserTypeContextType {
  userType: UserType;
  setUserType: (type: UserType) => void;
}

export const UserTypeContext = createContext<UserTypeContextType | undefined>(undefined);

interface UserTypeProviderProps {
  children: ReactNode;
}

export const UserTypeProvider: React.FC<UserTypeProviderProps> = ({ children }) => {
  const [userType, setUserType] = useState<UserType>('provider');

  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
};

export const useUserType = (): UserTypeContextType => {
  const context = useContext(UserTypeContext);
  if (context === undefined) {
    throw new Error('useUserType must be used within a UserTypeProvider');
  }
  return context;
};