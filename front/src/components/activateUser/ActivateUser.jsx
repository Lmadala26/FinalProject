import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./activateUser.module.css";

const ActivateUser = () => {
  const { registrationCode } = useParams();
  const [status, setstatus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const activateUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/users/validate/${registrationCode}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          setstatus("ok");
          navigate("/users/login");
        } else {
          const error = await response.json();
          setstatus("error");
          console.error("Error al activar usuario:", error.message);
        }
      } catch (error) {
        setstatus("error");
      }
    };

    activateUser();
  }, [registrationCode]);

  return (
    <div>
      {status === "ok" && (
        <p className={styles.ok}>¡Usuario activado correctamente!</p>
      )}
      {status === "error" && (
        <p className={styles.error}>Error al activar el usuario</p>
      )}
    </div>
  );
};

export default ActivateUser;
