import { useState } from "react";
import { useNavigate } from "react-router-dom";
import recoverPasswordService from "../service/recoverPasswordService";

export const RecoverPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const rta = await recoverPasswordService(email);

      navigate("/users/password");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h3>Recuperar contraseña</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Enviar</button>
        {error ? <p>{error}</p> : null}
      </form>
    </div>
  );
};
