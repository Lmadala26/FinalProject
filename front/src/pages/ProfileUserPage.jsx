import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import userIcon from "../assets/userIcon.jpg";

export const ProfileUserPage = () => {
  const { user } = useContext(AuthContext);
  const { VITE_API_URL } = import.meta.env;

  return (
    <div>
      <h3>Perfil de usuario {user.username}</h3>
      <h4>Email: {user.email}</h4>
      <img
        src={
          user.avatar
            ? `${VITE_API_URL}/uploads/${user.profilePhoto}`
            : userIcon
        }
        alt="imagen"
        width={"250px"}
        height={"250px"}
      />
    </div>
  );
};
