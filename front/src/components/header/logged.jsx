
import { AuthContext } from '../../context/AuthContextProvider';
import { Link } from "react-router-dom";
import styles from './logged.module.css'
import loggedUserService from "../../service/loggedUserService";
import React, { useState, useEffect, useContext } from "react";


export const AuthUser = () => {

    const {user, logout} = useContext(AuthContext);

    const { VITE_API_URL } = import.meta.env;
     const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await loggedUserService({ token });
        setUserData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUserData();
  }, [token]);
    return (
        <div>
            {
                user ? (
                    <div>
                        <span>Logueado como: {userData.email} </span>
                        <Link to={'/users'}>
                            <img
                                src={ user.avatar ?
                                            `${VITE_API_URL}/uploads/${user.avatar}`
                                            :
                                            userIcon
                                    }
                                alt="imagen"
                                width={'50px'}
                                height={'50px'}
                            />
                        </Link>
                        <button onClick={() => logout()}>Logout</button>
                    </div>
                ):(
                    <div className={styles.Buttons}>

                    <Link to ={'/users/register'}>
                        <button> Sign In</button>
                    </Link>

                    <Link to ={'/users/login'}>
                        <button> Log in</button>
                    </Link>
                    </div>
                )
            }
        </div>
    );
};
