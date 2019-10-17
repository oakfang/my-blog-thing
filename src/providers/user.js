import { createContext, useContext } from 'react';

const UserCtx = createContext();

export function useUser() {
  return useContext(UserCtx);
}

export const UserProvider = UserCtx.Provider;
