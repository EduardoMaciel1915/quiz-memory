import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface UserProps {
  children: ReactNode;
}

interface UserProviderData {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
}

export const UserContext = createContext<UserProviderData>({} as UserProviderData);

const UserProvider = ({ children }: UserProps) => {
  const [userName, setUserName] = useState<string>('');

  return (
    <UserContext.Provider value={{ setUserName, userName }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
