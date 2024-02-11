import styles from "./postComment.module.css";
import { FormNewComment } from "../components/formNewComment/FormNewComment";

export const NewCommentPage = () => {
  return (
    <>
      <div className={styles.container}>
        <FormNewComment />
      </div>
    </>
  );
};
