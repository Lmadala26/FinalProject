import { useState } from "react";
import { useNavigate } from "react-router-dom";
import newPasswordService from "../service/newPasswordService";
import styles from './newPasswordPage.module.css'

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
    <div className={styles.dadForm}>
      <div className={styles.divTitle}>
        <p className={styles.title}>Check your email to get the recovery code</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.divDad}>
          <div className={styles.divEmail}>
            <label className={styles.labelEmail}>Email</label>
            <input
              className={styles.inputEmail}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.divCode}>
            <label className={styles.labelCode}>Código de Recuperación</label>
            <input
              className={styles.textRecover}
              type="text"
              name="recoverPassCode"
              value={regCode}
              onChange={(e) => setRegCode(e.target.value)}
            />
          </div>
          <div className={styles.divNewPass}>
            <label className={styles.labelNewPass}>Ingrese nueva contraseña</label>
            <input
              className={styles.inputNewPass}
              type="password"
              name="newPass"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
          </div>
          <div className={styles.divrRepit}>
            <label className={styles.labelRepit}>Repita nueva contraseña</label>
            <input
              className={styles.inputRepit}
              type="password"
              name="confirmNewPass"
              value={confirmNewPass}
              onChange={(e) => setConfirmNewPass(e.target.value)}
            />
          </div>
        </div>
        <button className={styles.boton}>Confirmar</button>
        {error ? <p className={styles.error}>{error}</p> : null}
      </form>
    </div>
  );
};
