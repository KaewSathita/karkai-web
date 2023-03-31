import { createContext, useContext, useState } from "react";
import * as authService from "../api/authApi";

import {
  addAccessToken,
  getAccessToken,
  removeToken,
} from "../utils/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const signup = async (input) => {
    const res = await authService.signup(input);
    addAccessToken(res.data.data.token);
    await getme();
  };

  const login = async (input) => {
    const res = await authService.login(input);
    getAccessToken(res.data.data.token);
    await getme();
  };

  const logout = () => {
    removeToken();
  };

  const getme = async () => {
    const res = await authService.getme();
    console.log(res.data.user);
    setUser(res.data.user);
  };

  const isLoggedIn = () => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    return token ? true : false;
  };

  return (
    <AuthContext.Provider
      value={{ user, signup, login, getme, isLoggedIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthContextProvider;
