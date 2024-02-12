import { Tells } from "../components/comments/Comments";
import styles from "./homepage.module.css";
import { TopComments } from "../components/topComments/topComments";
import { Topic } from "../components/topics/topic";
export const HomePage = () => {
  return (
    <>
      <main className={styles.BodyB}>
        <article className={styles.Comments__section}>
          {/* <Comments /> */}
          <Tells
            userName={"Disney"}
            userComment={"Voy a comprar nintendo"}
            commentDate={"02/05/2004"}
            commentTitle={"Hoy se cena"}
          />
          <Tells
            userName={"Disney"}
            userComment={"Voy a comprar nintendo"}
            commentDate={"02/05/2004"}
            commentTitle={"Hoy se cena"}
          />
          <Tells
            userName={"Disney"}
            userComment={"Voy a comprar nintendo"}
            commentDate={"02/05/2004"}
            commentTitle={"Hoy se cena"}
          />
          <Tells
            userName={"Disney"}
            userComment={"Voy a comprar nintendo"}
            commentDate={"02/05/2004"}
            commentTitle={"Hoy se cena"}
          />
          <Tells
            userName={"Disney"}
            userComment={"Voy a comprar nintendo"}
            commentDate={"02/05/2004"}
            commentTitle={"Hoy se cena"}
          />
        </article>
        <article className={styles.Side}>
          <Topic />
          <ul className={styles.Top__comments}>
            <h2>Top comments</h2>
            <div className={styles.Topic__list}>
              <TopComments
                userName={"Disney"}
                commentDate={"02/05/2004"}
                commentTitle={"Hoy se cena"}
              />
              <TopComments
                userName={"Disney"}
                commentDate={"02/05/2004"}
                commentTitle={"Hoy se cena"}
              />
            </div>
          </ul>
        </article>
      </main>
    </>
  );
};

// import styles from "./homepage.module.css";
// import { TopComments } from "../components/topComments/topComments";
// import { Topic } from "../components/topics/topic";
// import { Comment } from "../components/commentsss/Comment";
// import { useComment } from "../service/useComment";
// import { CommentList } from "../components/commentsss/CommentList";
// import { AuthContext } from "../context/AuthContextProvider";
// import { NewComment } from "../components/commentsss/NewComment";

// export const HomePage = () => {
//   const { comment, error, loading, addComment, removeComment } = Comment();
//   const { user } = useContext(AuthContext);

//   if (loading) return <Loading />;
//   if (error) return <ErrorMessage message={error} />;

//   return (
//     <>
//       <main className={styles.BodyB}>
//         <article className={styles.Comments__section}>
//           {/* <CommentList comments={comments} removeComment={removeComment}/> */}
//           {user ? <NewComment addComment={addComment} /> : null}
//         </article>
//         <article className={styles.Side}>
//           <Topic />
//           <ul className={styles.Top__comments}>
//             <h2>Top comments</h2>
//             <div className={styles.Topic__list}>
//               <TopComments
//                 userName={"Disney"}
//                 commentDate={"02/05/2004"}
//                 commentTitle={"Hoy se cena"}
//               />
//               <TopComments
//                 userName={"Disney"}
//                 commentDate={"02/05/2004"}
//                 commentTitle={"Hoy se cena"}
//               />
//             </div>
//           </ul>
//         </article>
//       </main>
//     </>
//   );
// };
