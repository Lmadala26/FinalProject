
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import loggedUserService from "../../service/loggedUserService";
import modifyBackgroundImgService from "../../service/modifyBackgroundImgService";

const Form = () => {
  const { token } = useContext(AuthContext);
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
  };

    return (
        <form onSubmit={handleSubmit}>
            <div><input type="file" name="backgroundImg" onChange={handleChange} /></div>
            <input type="submit" value="Modificar Background" />
        </form>
    );}

    export default Form;