import styles from "./header.module.css";
import logo from "../../assets/logos/logoTellit.png";
import { AuthUser } from "./AuthUser";
import { TheSearchBar } from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
// import React, { useState, useEffect, useContext } from "react";
// import loggedUserService from "../../service/loggedUserService";
// import { AuthContext } from '../../context/AuthContextProvider';

export function Header() {
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.header__left}>
          <Link to ={"/"} className={styles.header__left} ><img  src={logo} alt="" className={styles.logo}/></Link>
        </div>

        <div className={styles.header__center}>
          <TheSearchBar/>
        </div>

        <div className={styles.header__right}>
          <AuthUser />
        </div>
      </header>
    </>
  );
}
