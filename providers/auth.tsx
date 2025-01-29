import {createContext, useContext, useEffect, useState} from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import {ACCOUNT_STATUS_KEY, TOKEN_KEY} from "app/libs/constant";

interface IAuthContext {
  signIn: (token: string) => void;
  signOut: (options?: {clearStorage?: boolean}) => void;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<IAuthContext>({
  signIn: () => {},
  signOut: () => {},
  token: null,
  isLoading: false,
  isAuthenticated: false,
});

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getToken = async () => {
      //   const token = await AsyncStorage.getItem(TOKEN_KEY);
      setToken(token);
      setIsLoading(false);
    };
    getToken();
  }, []);

  const signIn = async (token: string) => {
    setIsLoading(true);
    setToken(token);
    // await AsyncStorage.setItem(TOKEN_KEY, token);
    setIsLoading(false);
  };

  /*
   * clear storage options to add option for mobile & web if need keep some data on local device storage
   */
  const signOut = async (options?: {clearStorage?: boolean}) => {
    setIsLoading(true);
    setToken(null);
    const clearStorage = options?.clearStorage ?? true;
    if (!clearStorage) {
      //   await AsyncStorage.multiRemove([TOKEN_KEY, ACCOUNT_STATUS_KEY]);
    } else {
      //   await AsyncStorage.clear();
    }
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        token,
        isLoading,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
