import { createContext, useState, useEffect } from "react";
import loggedUserService from "../service/loggedUserService";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getDataUserLogged = async () => {
      try {
        const data = await loggedUserService({ token });
        setUser(data);
      } catch (error) {
        logout();
      }
    };

    getDataUserLogged();
  }, [token]);

  const logout = () => {
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
