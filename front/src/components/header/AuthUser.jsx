import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import loggedUserService from "../../service/loggedUserService";
import styles from "./logged.module.css";
import ejFotoPerfil from "../../assets/ejFotoPerfil.png";

export const AuthUser = () => {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await loggedUserService({ token });
        setUser(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUserData();
  }, [token]);

  return (
    <div>
      {user ? (
        <div>
          <span>{user.email}</span>
          <Link to={"/users"}>
            <img
              src={
                user.profilePhoto
                  ? `${import.meta.env.VITE_API_URL}/uploads/${
                      user.profilePhoto
                    }`
                  : ejFotoPerfil
              }
              alt="imagen"
              width={"50px"}
              height={"50px"}
            />
          </Link>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className={styles.Buttons}>
          <Link to={"/users/register"}>
            <button> Sign In</button>
          </Link>
          <Link to={"/users/login"}>
            <button> Log in</button>
          </Link>
        </div>
      )}
    </div>
  );
};
