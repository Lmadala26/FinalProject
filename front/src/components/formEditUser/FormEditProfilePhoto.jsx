import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import loggedUserService from "../../service/loggedUserService";
import modifyProfilePhotoService from "../../service/modifyProfilePhotoService";
import ejFotoPerfil from "../../assets/ejFotoPerfil.png";
import Button from "./buttonprof";
import FormProf from "./formprof";
import styles from "./profileuserimg.module.css"

const FormEditProfilePhoto = () => {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profilePhoto) {
      console.error(
        "No ha seleccionado ninguna imagen / You have not selected an image"
      );
      return;
    }

    const data = new FormData();
    data.append("profilePhoto", profilePhoto);
    await modifyProfilePhotoService({ data, token });

    const updatedUserData = await loggedUserService({ token });
    setUser(updatedUserData);
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

    const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  }

  return (
    <div>
      {user ? (
        <div className={styles.container2}>
          <img
            src={
              user.profilePhoto
                ? `${import.meta.env.VITE_API_URL}/uploads/${user.profilePhoto}`
                : ejFotoPerfil
            }
            alt="imagen"
            className={styles.profileimg}
          />
          <br />
          <Button onClick={toggleFormulario} />
      {mostrarFormulario && <FormProf />}
        </div>
      ) : (
        <p>Cargando información del usuario...</p>
      )}
    </div>
  );
};

export default FormEditProfilePhoto;
