// import styles from './post.module.css'

// export function Post(){
//     return(
//         <>
//         <form className={styles.content}>
//                 <select id={styles.topics} text="select topic">
//                    <option className={styles.topic1}>DEPORTES</option>
//                    <option className={styles.topic2}>MÚSICA</option>
//                    <option className={styles.topic3}>TECNOLOGÍA</option>
//                    <option className={styles.topic4}>ECONOMÍA</option>
//                    <option className={styles.topic5}>VIAJES</option>
//                 </select>
//                 <input type="text" name="" id={styles.title} />
//                 <textarea name="" id="" cols="30" rows="10" className={styles.comment}></textarea>
//                 <input type="submit"  className={styles.post}/>
//         </form>
//         </>
//     )
// }

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import styles from './post.module.css';

export const FormNewComment = () => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const title = formData.get("title");
      const topic = formData.get("topic");
      const description = formData.get("description");

      const data = { title, topic, description };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(
          responseData.message || "Error al enviar el comentario"
        );
      }

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.title}>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" id="title" />
      </div>
      <div>
        <label htmlFor="topic">Topico</label>
        <input type="text" name="topic" id="topic" />
      </div>
      <div className={styles.comment}>
        <label htmlFor="description">Descripcion</label>
        <input type="text" name="description" id="description" />
      </div>
      <input type="submit" value="Enviar" />
      {error && <p>{error}</p>}
    </form>
  );
};
