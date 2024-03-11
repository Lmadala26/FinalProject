import { Tweet } from "./Tweet";
import styles from "./tweetList.module.css";
import ejFotoPerfil from "../../assets/ejFotoPerfil.png";
import positiveVote from "../../assets/icons/positiveVote.svg";
import negativeVote from "../../assets/icons/negativeVote.svg";

export const TweetList = ({ tweets }) => {
  return tweets.length ? (
    <ul className="tweet-list">
      {tweets.map((tweet) => (
        <article key={tweet.id} className={styles.c__container}>
          <h2 className={styles.c__title}>{tweet.title}</h2>
          <div className={styles.c__box1}>
            <img
              src={
                tweet.profilePhoto
                  ? `${import.meta.env.VITE_API_URL}/uploads/${
                      tweet.profilePhoto
                    }`
                  : ejFotoPerfil
              }
              alt="imagen"
              width={"50px"}
              height={"50px"}
              className={styles.profilePhoto}
            />
          </div>

          <p></p>

          <div className={styles.c__content}>
            <div className={styles.c__head}>
              <div className={styles.user__name}>
                {" "}
                <p>Usurio: {tweet.username}</p>
              </div>
              <div className={styles.c__date}>
                {new Date(tweet.createdAt).toLocaleString()}
              </div>
            </div>

            <div className={styles.c__center}>
              <p>Comentario: {tweet.description}</p>
              <p>Topic: {tweet.topic}</p>
              <div className={styles.c__photo}>
                <img src="" alt="" />
              </div>
            </div>
            <div className={styles.c__footer}>
              <button className={styles.positive__button}>
                <img src={positiveVote} alt="" />
              </button>
              <button className={styles.negative__button}>
                <img src={negativeVote} alt="" />
              </button>
            </div>
          </div>
        </article>
      ))}
    </ul>
  ) : (
    <p>There are no tweets...</p>
  );
};
