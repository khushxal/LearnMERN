import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const isLoggedIn = !!token;

  function storeToken(Token) {
    localStorage.setItem("token", Token);
  }

  function deleteToken() {
    setToken("");
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ storeToken, deleteToken, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UseAuth() {
  const authContextValue = useContext(AuthContext);
  return authContextValue;
}
