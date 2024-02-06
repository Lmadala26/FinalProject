import { NavLink } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <h1 style={{ color: "yellow" }}>Login</h1>
      <NavLink to={"/password/recover"}>Recuperar Contraseña</NavLink>
    </>
  );
};
