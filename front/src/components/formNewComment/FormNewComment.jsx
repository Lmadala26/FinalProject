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
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>¡Cuéntanos algo!</h2>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div >
            <label htmlFor="title">Titulo</label>
            <input type="text" name="title" id="title" className={styles.section}/>
          </div>
          <div>
            <label htmlFor="topic">Topico</label>
            <input type="text" name="topic" id="topic" className={styles.section}/>
          </div>
          <div className={styles.comment}>
            <label htmlFor="description">Descripcion</label>
            <textarea type="text" name="description" id="description" className={styles.description}/>
          </div>
          <input type="submit" value="Enviar" className={styles.enviar}/>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
};
