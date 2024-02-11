import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import modifyUserService from "../../service/modifyUserService";
import loggedUserService from "../../service/loggedUserService";

const FormUserEdit = () => {
  // const { user, token } = useContext(AuthContext);
  // const [username, setUsername] = useState(user.username);
  // const [email, setEmail] = useState(user.email);
  // Con lo de abajo funciona ya que no coloca el value, y si modifica en la base de datos, problema en Authcontext
  const { user, token } = useContext(AuthContext);
  const defaultUsername = user ? user.username : "";
  const defaultEmail = user ? user.email : "";
  const [username, setUsername] = useState(defaultUsername);
  const [email, setEmail] = useState(defaultEmail);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await loggedUserService({ token });
        setUsername(userData.username);
        setEmail(userData.email);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, [token]);

  const handleFormData = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData(e.target);

      await modifyUserService({ data, token });

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormData}>
        <div>
          <label htmlFor="">Nombre de usuario</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Modificar</button>
        {error ? <p>{error}</p> : null}
      </form>
    </div>
  );
};

export default FormUserEdit;
