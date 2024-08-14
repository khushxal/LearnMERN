import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = !!token;

  // when login or sign up token stored
  function storeToken(Token) {
    setToken(Token);
    localStorage.setItem("token", Token);
  }

  function deleteToken() {
    setToken("");
    setUser("");
    localStorage.removeItem("token");
  }

  async function isAuthorizedUser() {
    try {
      setIsLoading(true);
      const res = await axios.get(
        import.meta.env.VITE_SERVER_API + "/api/auth/user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res) {
        setUser(await res.data.userData);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (token) {
      isAuthorizedUser();
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ storeToken, deleteToken, isLoggedIn, token, user, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UseAuth() {
  const authContextValue = useContext(AuthContext);
  return authContextValue;
}
