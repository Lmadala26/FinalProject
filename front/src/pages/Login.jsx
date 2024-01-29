import { NavLink } from "react-router-dom";
import FormLogin from "../components/formLogin/FormLogin";

const Login = () => {
  return (
    <>
      <FormLogin />
      <NavLink to={"/user/recover-password"}>Recuperar Contraseña</NavLink>
    </>
  );
};

export default Login;
