import { useState } from "react";
import { Link } from "react-router-dom";
import registerUserService from "../../service/registerUserService";
import styles from "./formregister.module.css";

const FormRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [rta, setRta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const rta = await registerUserService({ username, email, password });
      setRta(rta);
    } catch (error) {
      setError(error.message);
    }
  };

  console.log(rta);

  return (
    <form className={styles.formRegister} onSubmit={handleSubmit}>
      <div>
        <label>Nombre de usuario</label>
        <input
          className={styles.username}
          type="text"
          name="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          className={styles.email}
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          className={styles.password}
          type="password"
          name="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirmar Password</label>
        <input
          className={styles.confirmPassword}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <input className={styles.send} type="submit" value="Enviar" />
      </div>
      {rta.status == "ok" ? (
        <>
          <p>{rta.message}</p>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </>
      ) : (
        ""
      )}
      {error ? <p>{error}</p> : ""}
    </form>
  );
};

export default FormRegister;
