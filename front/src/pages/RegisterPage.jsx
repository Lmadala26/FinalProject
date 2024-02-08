import FormRegister from "../components/formRegister/FormRegister";
import "./registerpage.css";

export const RegisterPage = () => {
  return (
    <>
      <div className="singUpFather">
        <section className="singUpSection">
          <h1 className="singUp"> Sing Up</h1>
          <FormRegister />
        </section>
      </div>
    </>
  );
};
