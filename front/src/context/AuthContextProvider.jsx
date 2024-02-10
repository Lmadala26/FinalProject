import { createContext, useState, useEffect } from "react";
import loggedUserService from "../service/loggedUserService";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const UserLogged = async () => {
      try {
        const data = await loggedUserService({ token });
        setUser(data);
      } catch (error) {
        logout();
      }
    };

    UserLogged();
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

export default AuthContextProvider;
