import styles from "./comments.module.css";
export function Tells({
  userName,
  userComment,
  commentDate,
  commentTitle,
  iconTitle,
  commentPhoto,
}) {
  return (
    <article className={styles.c__container}>
      <div className={styles.c__title}>
        <p>{commentTitle}</p>
      </div>

      <div className={styles.c__box1}>
        <a href={`https://unavatar.io/${userName}`}>
          <img
            src={`https://unavatar.io/${userName}`}
            alt=""
            className={styles.user__img}
          />
        </a>
      </div>
      <div className={styles.c__content}>
        <div className={styles.c__head}>
          <div className={styles.user__name}>@{userName}</div>
          <div className={styles.c__date}>{commentDate}</div>
        </div>
        <div className={styles.c__center}>
          <p>{userComment}</p>
          <div className={styles.c__photo}>
            <img src={commentPhoto} alt="" />
          </div>
        </div>
        <div className={styles.c__footer}>
          <button className={styles.positive__button}>
            <img src="https://pngimg.com/uploads/like/like_PNG14.png" alt="" />
          </button>
          <button className={styles.negative__button}>-</button>
        </div>
      </div>
    </article>
  );
}
// import { useState, useEffect } from "react";
// import fetchApi from "../../service/fetchApi";
// import useComments from "../../hooks/useComments";

// const Comments = () => {
//   const { VITE_API_URL } = import.meta.env;

//   const comments = useComments();

//   return (
//     <>
//       {comments &&
//         comments?.map((comments) => {
//           return (
//             <div key={comments.id}>
//               <p>{comments.title}</p>
//               {comments.photos.length ? (
//                 <img
//                   src={`${VITE_API_URL}/uploads/${comments.photos[0].name}`}
//                   alt=""
//                 />
//               ) : (
//                 "La entrada no contiene imagenes todavía"
//               )}
//             </div>
//           );
//         })}
//     </>
//   );
// };

// export default Comments;
