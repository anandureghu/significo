import { createContext } from "react";

export const AppContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
