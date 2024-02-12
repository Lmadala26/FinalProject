import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import loggedUserService from "../../service/loggedUserService";
import modifyProfilePhotoService from "../../service/modifyProfilePhotoService";
import ejFotoPerfil from "../../assets/ejFotoPerfil.png";

const FormEditProfilePhoto = () => {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("profilePhoto", profilePhoto);
    await modifyProfilePhotoService({ data, token });
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
          <img
            src={
              user.profilePhoto
                ? `${import.meta.env.VITE_API_URL}/uploads/${user.profilePhoto}`
                : ejFotoPerfil
            }
            alt="imagen"
            width={"50px"}
            height={"50px"}
          />
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <input type="file" name="profilePhoto" onChange={handleChange} />
            </div>
            <input type="submit" value="Modificar Foto de Perfil" />
          </form>
        </div>
      ) : (
        <p>Cargando información del usuario...</p>
      )}
    </div>
  );
};

export default FormEditProfilePhoto;
