import { useState } from "react";
import { useNavigate } from "react-router-dom";
import recoverPasswordService from "../service/recoverPasswordService";
import styles from "./recoverPassword.module.css"

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
    <div className={styles.dadForms}>
      <h3 className={styles.title}>Recover Password</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.divInput}>
          <label>Email</label>
          <input
            className={styles.inputEmail}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className={styles.boton}>Send</button>
        {error ? <p className={styles.error} >{error}</p> : null}
      </form>
    </div>
  );
};
