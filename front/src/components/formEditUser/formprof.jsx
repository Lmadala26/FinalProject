import React from "react";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import loggedUserService from "../../service/loggedUserService";
import modifyProfilePhotoService from "../../service/modifyProfilePhotoService";
import ejFotoPerfil from "../../assets/ejFotoPerfil.png";

const FormProf = () =>{
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

    return(
        <form onSubmit={handleSubmit}>
            <div><input type="file" name="profilePhoto" onChange={handleChange} /></div>
            <input type="submit" value="Modificar Foto de Perfil" />
        </form>
    )
}

export default FormProf ;