import { getCurrentUser } from "@/lib/appwrite";
import { UserProps } from "@/types";
import React, { createContext, useContext, useEffect } from "react";

export interface GlobalProps {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserProps | null;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
}

const initialContext: GlobalProps = {
  isLogged: false,
  setIsLogged: () => {},
  user: null,
  setUser: () => {},
  loading: true,
};

const GlobalContext = createContext<GlobalProps>(initialContext);
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLogged, setIsLogged] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        if (user) {
          setIsLogged(true);
          setUser(user);
        } else {
          setIsLogged(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <GlobalContext.Provider
      value={{ isLogged, setIsLogged, user, setUser, loading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
