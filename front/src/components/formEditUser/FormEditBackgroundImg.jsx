import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import loggedUserService from "../../service/loggedUserService";
import modifyBackgroundImgService from "../../service/modifyBackgroundImgService";
import ejFondoPerfil from "../../assets/ejFondoPerfil.png";

const FormEditBackgroundImg = () => {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [backgroundImg, setBackgroundImg] = useState(null);

  const handleChange = (e) => {
    setBackgroundImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!backgroundImg) {
      console.error(
        "No ha seleccionado ninguna imagen / You have not selected an image"
      );
      return;
    }

    const data = new FormData();
    data.append("backgroundImg", backgroundImg);
    await modifyBackgroundImgService({ data, token });

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

  return (
    <div>
      {user ? (
        <div>
          <img
            src={
              user.backgroundImg
                ? `${import.meta.env.VITE_API_URL}/uploads/${
                    user.backgroundImg
                  }`
                : ejFondoPerfil
            }
            alt="imagen"
            width={"50px"}
            height={"50px"}
          />
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <input type="file" name="backgroundImg" onChange={handleChange} />
            </div>
            <input type="submit" value="Modificar Background" />
          </form>
        </div>
      ) : (
        <p>Cargando información del usuario...</p>
      )}
    </div>
  );
};

export default FormEditBackgroundImg;
