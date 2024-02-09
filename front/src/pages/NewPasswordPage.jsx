import { useState } from "react";
import { useNavigate } from "react-router-dom";
import newPasswordService from "../service/newPasswordService";

export const NewPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [regCode, setRegCode] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPass !== confirmNewPass) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await newPasswordService({
        email,
        recoverPassCode: regCode,
        newPass,
      });
      navigate("/users/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div>
        <p>Revise su email para obtener el código de recuperación</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Código de Recuperación</label>
          <input
            type="text"
            name="recoverPassCode"
            value={regCode}
            onChange={(e) => setRegCode(e.target.value)}
          />
        </div>
        <div>
          <label>Ingrese nueva contraseña</label>
          <input
            type="password"
            name="newPass"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
        </div>
        <div>
          <label>Repita nueva contraseña</label>
          <input
            type="password"
            name="confirmNewPass"
            value={confirmNewPass}
            onChange={(e) => setConfirmNewPass(e.target.value)}
          />
        </div>
        <button>Confirmar</button>
        {error ? <p>{error}</p> : null}
      </form>
    </div>
  );
};
