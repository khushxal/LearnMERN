import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState();

  const isLoggedIn = !!token;

  function storeToken(Token) {
    localStorage.setItem("token", Token);
    setToken(Token);
  }

  function deleteToken() {
    setToken("");
    localStorage.removeItem("token");
  }

  async function isAuthorizedUser() {
    try {
      const res = await axios.get("http://localhost:3001/api/auth/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        setUserData(await res.data.userData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    if (token) {
      isAuthorizedUser();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeToken, deleteToken, isLoggedIn, userData, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UseAuth() {
  const authContextValue = useContext(AuthContext);
  return authContextValue;
}
