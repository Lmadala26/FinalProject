// import { Tells } from "../components/comments/Comments";
// import { ProfileUserHero } from "../components/profileUserHero/ProfileUserHero";
// import styles from './profileUserPage.module.css'

// export const ProfileUserPage = () => {
//     return (
//         <main className={styles.main1}>
//             <section className={styles.section1}>
//                 <ProfileUserHero />
//             </section>
//             <section className={styles.section2}>
//                 <Tells userName={'juan'} commentTitle={'awdw'}/>
//                 <Tells userName={'disney'} commentTitle={'awdwad'}/>
//                 <Tells userName={'nintendo'}/>
//             </section>
//         </main>
//     );
//   };

// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContextProvider";

// export const ProfileUserPage = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <div>
//       <h3>Perfil de usuario {user.username}</h3>
//       <h4>Email: {user.email}</h4>
//     </div>
//   );
// };

import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import loggedUserService from "../service/loggedUserService";

export const ProfileUserPage = () => {
  const { user, token } = useContext(AuthContext);
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
      {userData ? (
        <div>
          <h3>Perfil de usuario {userData.username}</h3>
          <h4>Email: {userData.email}</h4>
        </div>
      ) : (
        <p>Cargando información del usuario...</p>
      )}
    </div>
  );
};
