import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import { loginUserService } from "../../service/loginUserService";

import styles from './formLogin.module.css'

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { setToken } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const rta = await loginUserService({ email, passwd });

      setToken(rta);

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <section className={styles.DadLogin}>
        <h2 className={styles.loginTitle}>Login</h2>
        <form className={styles.dadForm} onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            <label htmlFor="">Email</label>
            <input
              className={styles.inputEmail}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
              className={styles.inputPassword}
              type="password"
              name="password"
              onChange={(e) => setPasswd(e.target.value)}
            />
            <Link to={"/user/recover-password"}>
              <p className={styles.linkRecover}>Recupar contraseña</p>
            </Link>
          </div>
          <div>
              
            <button className={styles.botonLogin}>Login</button>
          </div>

          {error ? <p className={styles.errorStyle}>{error}</p> : null}
        </form>
      </section>
    </>
  );
};

export default FormLogin;
