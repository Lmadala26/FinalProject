import FormRegister from "../components/formRegister/FormRegister";
import styles from "./registerpage.module.css";

export const RegisterPage = () => {
  return (
    <>
      <div className={styles.singUpFather}>
        <section className={styles.singUpSection}>
          <h1 className={styles.singUp}> Sing Up</h1>
          <div className={styles.inputs}></div>
          <FormRegister />
        </section>
      </div>
    </>
  );
};
